import type { CartItem } from "@/types";

export function formatPrice(amount: number): string {
  return "\u09F3" + amount.toLocaleString("en-IN");
}

export function calculateEstimatedTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price.min * item.quantity, 0);
}

export function calculateMaxTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price.max * item.quantity, 0);
}

export function getTotalItems(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

export function generateWhatsAppMessage(
  items: CartItem[],
  customerInfo: { name: string; phone: string; area: string; notes: string }
): string {
  const itemLines = items
    .map(
      (item, i) =>
        `${i + 1}. ${item.name} x${item.quantity} - from ${formatPrice(item.price.min * item.quantity)}`
    )
    .join("\n");

  const total = calculateEstimatedTotal(items);

  const message = `*AIBD.AI Order Inquiry*

*Products:*
${itemLines}

*Estimated Total:* from ${formatPrice(total)}

*Customer:* ${customerInfo.name}
*Phone:* ${customerInfo.phone}
*Area:* ${customerInfo.area}${customerInfo.notes ? `\n*Notes:* ${customerInfo.notes}` : ""}`;

  return message;
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/8809613824682?text=${encodeURIComponent(message)}`;
}
