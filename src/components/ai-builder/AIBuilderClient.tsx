"use client";

import { useState, useMemo } from "react";
import productsData from "@/data/products.json";
import { generateRecommendations } from "@/lib/ai-builder-prompt";
import SetupForm from "./SetupForm";
import ResultsView from "./ResultsView";
import type { AIBuilderResponse, Product } from "@/types";

export default function AIBuilderClient() {
  const [step, setStep] = useState<"setup" | "loading" | "results">("setup");
  const [results, setResults] = useState<AIBuilderResponse | null>(null);

  const productsMap = useMemo(() => {
    const map = new Map<number, Product>();
    for (const p of productsData.products as Product[]) {
      map.set(p.id, p);
    }
    return map;
  }, []);

  function handleSubmit(data: {
    rooms: string[];
    budget: number;
    priorities: string[];
    message: string;
  }) {
    setStep("loading");

    // Simulate brief processing delay for better UX
    setTimeout(() => {
      const recs = generateRecommendations(
        data.rooms,
        data.budget,
        data.priorities
      );
      setResults(recs);
      setStep("results");
    }, 1200);
  }

  function handleReset() {
    setResults(null);
    setStep("setup");
  }

  if (step === "loading") {
    return (
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-gray-800" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin" />
          <div className="absolute inset-3 rounded-full border-2 border-transparent border-t-violet-400 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          Building your smart home...
        </h3>
        <p className="text-gray-400 text-sm">
          Analyzing products and finding the best matches
        </p>
      </div>
    );
  }

  if (step === "results" && results) {
    return (
      <ResultsView
        results={results}
        productsMap={productsMap}
        onReset={handleReset}
      />
    );
  }

  return <SetupForm onSubmit={handleSubmit} isLoading={false} />;
}
