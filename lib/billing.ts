export enum PackId {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export type CreditsPack = {
  id: PackId;
  name: string;
  label: string;
  credits: number;
  price: number;
  priceId: string;
};

export const CreditsPack: CreditsPack[] = [
  {
    id: PackId.SMALL,
    name: "Small Pack",
    label: "500 Credits",
    credits: 500,
    price: 1999,
    priceId: process.env.STRIPE_SMALL_PACK_PRICE_ID!,
  },
  {
    id: PackId.MEDIUM,
    name: "Medium Pack",
    label: "2,000 Credits",
    credits: 2000,
    price: 4999,
    priceId: process.env.STRIPE_MEDIUM_PACK_PRICE_ID!,
  },
  {
    id: PackId.LARGE,
    name: "Large Pack",
    label: "5,000 Credits",
    credits: 5000,
    price: 9999,
    priceId: process.env.STRIPE_LARGE_PACK_PRICE_ID!,
  },
];

export function getCreditsPack(id: PackId) {
  return CreditsPack.find((p) => p.id === id);
}
