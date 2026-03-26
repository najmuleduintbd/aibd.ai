import productsData from "@/data/products.json";
import type { AIBuilderResponse, AIRecommendation } from "@/types";

// Maps rooms to relevant product categories
const roomCategoryMap: Record<string, string[]> = {
  "Living Room": [
    "Smart Lights & Fans",
    "Smart Switches & Sockets",
    "Smart Speaker & Hub",
    "Smart Electronics & Gadgets",
    "Smart Devices & Control Panels",
  ],
  Bedroom: [
    "Smart Lights & Fans",
    "Smart Switches & Sockets",
    "Smart Health & Wellness",
    "Smart Home Appliances",
  ],
  Kitchen: [
    "Smart Switches & Sockets",
    "Smart Home Appliances",
    "Smart Home Cleaning",
    "Smart Electronics & Gadgets",
  ],
  Bathroom: [
    "Smart Switches & Sockets",
    "Smart Health & Wellness",
    "Smart Home Appliances",
  ],
  Office: [
    "Smart Lights & Fans",
    "Smart Switches & Sockets",
    "Smart Electronics & Gadgets",
    "Smart Devices & Control Panels",
    "Ergonomic Smart Furniture",
  ],
  Entrance: [
    "Smart Door Locks",
    "Smart Security & Surveillance",
    "Smart Lights & Fans",
  ],
  "Whole Home": [
    "Smart Door Locks",
    "Smart Lights & Fans",
    "Smart Switches & Sockets",
    "Smart Speaker & Hub",
    "Smart Security & Surveillance",
    "Smart Devices & Control Panels",
    "Smart Home Cleaning",
  ],
};

// Maps priorities to categories that align
const priorityCategoryMap: Record<string, string[]> = {
  Security: ["Smart Door Locks", "Smart Security & Surveillance"],
  Comfort: [
    "Smart Lights & Fans",
    "Smart Home Appliances",
    "Smart Health & Wellness",
    "Ergonomic Smart Furniture",
  ],
  "Energy Saving": ["Smart Switches & Sockets", "Smart Lights & Fans", "Smart Devices & Control Panels"],
  Entertainment: ["Smart Speaker & Hub", "Smart Electronics & Gadgets", "Smart Lights & Fans"],
};

// Reasons per category
const categoryReasons: Record<string, string[]> = {
  "Smart Door Locks": [
    "Keyless entry for convenience and security",
    "Fingerprint/face recognition for quick access",
    "Remote access to control your door lock",
  ],
  "Smart Lights & Fans": [
    "Set the mood with smart lighting control",
    "Save energy with automated scheduling",
    "Voice-controlled comfort for daily use",
  ],
  "Smart Switches & Sockets": [
    "Automate your home electronics easily",
    "Monitor energy usage and reduce bills",
    "Control appliances remotely from anywhere",
  ],
  "Smart Speaker & Hub": [
    "Central hub for voice-controlling all devices",
    "Play music and manage your smart home",
    "Hands-free control for everyday tasks",
  ],
  "Smart Security & Surveillance": [
    "Monitor your home 24/7 from your phone",
    "Motion detection alerts for peace of mind",
    "Night vision for round-the-clock security",
  ],
  "Smart Health & Wellness": [
    "Track health metrics from home",
    "Improve air quality for better living",
    "Smart wellness monitoring for your family",
  ],
  "Smart Home Cleaning": [
    "Automated cleaning saves time daily",
    "Schedule cleaning while you are away",
    "Effortless floor maintenance with robot vacuum",
  ],
  "Smart Home Appliances": [
    "Smart temperature control for comfort",
    "Convenient portable smart appliances",
    "Energy-efficient appliance automation",
  ],
  "Smart Devices & Control Panels": [
    "Centralized control for all smart devices",
    "Touch panel for easy home management",
    "Zigbee gateway to connect all devices",
  ],
  "Smart Electronics & Gadgets": [
    "Enhance your daily life with smart gadgets",
    "Useful smart accessories for modern living",
    "Tech gadgets for a connected home",
  ],
  "Ergonomic Smart Furniture": [
    "Height-adjustable desk for productivity",
    "Ergonomic smart furniture for comfort",
  ],
  "Wall Components & Accessories": [
    "Essential wall accessories for smart setup",
    "Clean installation for your smart devices",
  ],
};

function getReason(category: string, index: number): string {
  const reasons = categoryReasons[category] || ["Great addition to your smart home"];
  return reasons[index % reasons.length];
}

export function generateRecommendations(
  rooms: string[],
  budget: number,
  priorities: string[]
): AIBuilderResponse {
  const allProducts = productsData.products.filter((p) => p.inStock !== false);
  const budgetPerRoom = Math.floor(budget / rooms.length);
  const usedProductIds = new Set<number>();

  // Boost categories based on priorities
  const priorityCategories = new Set<string>();
  for (const priority of priorities) {
    const cats = priorityCategoryMap[priority] || [];
    cats.forEach((c) => priorityCategories.add(c));
  }

  const roomRecommendations: AIRecommendation[] = [];

  for (const room of rooms) {
    const relevantCategories = roomCategoryMap[room] || roomCategoryMap["Whole Home"];

    // Score products for this room
    const scored = allProducts
      .filter((p) => !usedProductIds.has(p.id))
      .filter((p) => relevantCategories.includes(p.category))
      .filter((p) => p.price.min <= budgetPerRoom * 0.7) // Allow individual products up to 70% of room budget
      .map((p) => {
        let score = 0;
        // Priority match bonus
        if (priorityCategories.has(p.category)) score += 3;
        // Price efficiency (cheaper relative to budget = higher score)
        score += Math.max(0, 2 - (p.price.min / budgetPerRoom) * 2);
        // Has image bonus (better UX)
        if (p.image) score += 1;
        // Has features bonus
        if (p.features.length > 3) score += 0.5;
        return { product: p, score };
      })
      .sort((a, b) => b.score - a.score);

    // Pick products within room budget
    const roomProducts: { productId: number; reason: string }[] = [];
    let roomSpent = 0;

    // Ensure diversity: pick from different categories
    const pickedCategories = new Set<string>();

    for (const { product } of scored) {
      if (roomSpent + product.price.min > budgetPerRoom) continue;
      if (pickedCategories.has(product.category) && roomProducts.length < 4) continue; // Try diverse first

      roomProducts.push({
        productId: product.id,
        reason: getReason(product.category, roomProducts.length),
      });
      roomSpent += product.price.min;
      usedProductIds.add(product.id);
      pickedCategories.add(product.category);

      if (roomProducts.length >= 5) break;
    }

    // If we still have budget and didn't fill, allow same-category picks
    if (roomProducts.length < 3) {
      for (const { product } of scored) {
        if (usedProductIds.has(product.id)) continue;
        if (roomSpent + product.price.min > budgetPerRoom) continue;

        roomProducts.push({
          productId: product.id,
          reason: getReason(product.category, roomProducts.length),
        });
        roomSpent += product.price.min;
        usedProductIds.add(product.id);

        if (roomProducts.length >= 4) break;
      }
    }

    if (roomProducts.length > 0) {
      roomRecommendations.push({
        roomType: room,
        products: roomProducts,
        roomBudget: roomSpent,
      });
    }
  }

  const estimatedTotal = roomRecommendations.reduce(
    (sum, r) => sum + r.roomBudget,
    0
  );
  const totalProducts = roomRecommendations.reduce(
    (sum, r) => sum + r.products.length,
    0
  );

  const summary = `We've selected ${totalProducts} smart home products across ${roomRecommendations.length} area${roomRecommendations.length !== 1 ? "s" : ""}, optimized for your ${priorities.join(" & ").toLowerCase()} priorities within your budget of ৳${budget.toLocaleString("en-IN")}.`;

  return {
    rooms: roomRecommendations,
    summary,
    estimatedTotal,
  };
}
