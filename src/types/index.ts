export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: { min: number; max: number };
  source: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  productCount: number;
}

export interface CartItem {
  productId: number;
  slug: string;
  categorySlug: string;
  name: string;
  image: string;
  price: { min: number; max: number };
  quantity: number;
  source: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: { productId: number } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: number; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "CLOSE_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

export interface AIBuilderRequest {
  rooms: string[];
  budget: number;
  priorities: string[];
  message?: string;
  conversationHistory?: AIMessage[];
}

export interface AIMessage {
  role: "user" | "assistant";
  content: string;
}

export interface AIRecommendation {
  roomType: string;
  products: { productId: number; reason: string }[];
  roomBudget: number;
}

export interface AIBuilderResponse {
  rooms: AIRecommendation[];
  summary: string;
  estimatedTotal: number;
}
