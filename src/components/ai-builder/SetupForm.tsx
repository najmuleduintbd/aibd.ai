"use client";

import { useState } from "react";
import BudgetSlider from "./BudgetSlider";

const roomOptions = [
  { id: "Living Room", icon: "🛋️", label: "Living Room" },
  { id: "Bedroom", icon: "🛏️", label: "Bedroom" },
  { id: "Kitchen", icon: "🍳", label: "Kitchen" },
  { id: "Bathroom", icon: "🚿", label: "Bathroom" },
  { id: "Office", icon: "💻", label: "Office" },
  { id: "Entrance", icon: "🚪", label: "Entrance" },
  { id: "Whole Home", icon: "🏠", label: "Whole Home" },
];

const priorityOptions = [
  { id: "Security", icon: "🔒", label: "Security" },
  { id: "Comfort", icon: "✨", label: "Comfort" },
  { id: "Energy Saving", icon: "⚡", label: "Energy Saving" },
  { id: "Entertainment", icon: "🎵", label: "Entertainment" },
];

interface SetupFormProps {
  onSubmit: (data: {
    rooms: string[];
    budget: number;
    priorities: string[];
    message: string;
  }) => void;
  isLoading: boolean;
}

export default function SetupForm({ onSubmit, isLoading }: SetupFormProps) {
  const [rooms, setRooms] = useState<string[]>([]);
  const [budget, setBudget] = useState(50000);
  const [priorities, setPriorities] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  function toggleRoom(id: string) {
    if (id === "Whole Home") {
      setRooms(rooms.includes("Whole Home") ? [] : ["Whole Home"]);
    } else {
      setRooms((prev) =>
        prev.filter((r) => r !== "Whole Home").includes(id)
          ? prev.filter((r) => r !== id)
          : [...prev.filter((r) => r !== "Whole Home"), id]
      );
    }
  }

  function togglePriority(id: string) {
    setPriorities((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rooms.length === 0 || priorities.length === 0) return;
    onSubmit({ rooms, budget, priorities, message });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Room Selection */}
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          Which areas do you want to make smart?
        </h3>
        <p className="text-gray-400 text-sm mb-4">Select one or more areas</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {roomOptions.map((room) => (
            <button
              key={room.id}
              type="button"
              onClick={() => toggleRoom(room.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                rooms.includes(room.id)
                  ? "bg-cyan-500/10 border-cyan-500/50 text-cyan-300"
                  : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
              }`}
            >
              <span className="text-2xl">{room.icon}</span>
              <span className="text-sm font-medium">{room.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          What&apos;s your budget?
        </h3>
        <p className="text-gray-400 text-sm mb-4">Total budget in BDT</p>
        <BudgetSlider value={budget} onChange={setBudget} />
      </div>

      {/* Priorities */}
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          What matters most to you?
        </h3>
        <p className="text-gray-400 text-sm mb-4">Select your priorities</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {priorityOptions.map((priority) => (
            <button
              key={priority.id}
              type="button"
              onClick={() => togglePriority(priority.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                priorities.includes(priority.id)
                  ? "bg-violet-500/10 border-violet-500/50 text-violet-300"
                  : "bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-gray-300"
              }`}
            >
              <span className="text-2xl">{priority.icon}</span>
              <span className="text-sm font-medium">{priority.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <h3 className="text-lg font-bold text-white mb-2">
          Anything else we should know?
        </h3>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none placeholder-gray-500"
          placeholder="e.g., I live in a 3-bedroom apartment in Dhanmondi..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={rooms.length === 0 || priorities.length === 0 || isLoading}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
          rooms.length === 0 || priorities.length === 0
            ? "bg-gray-800 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.01]"
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Building your smart home...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Build My Smart Home
          </>
        )}
      </button>
    </form>
  );
}
