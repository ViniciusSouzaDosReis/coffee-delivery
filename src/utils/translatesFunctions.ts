export type PaymentMethodTypes = "debit" | "credit" | "money";

export function translatePaymentMethodToPortugues(
  paymentMethod: PaymentMethodTypes
) {
  switch (paymentMethod) {
    case "debit":
      return "Cartão de Debito";
    case "credit":
      return "Cartão de Credito";
    case "money":
      return "Dinheiro";
    default:
      return paymentMethod;
  }
}
