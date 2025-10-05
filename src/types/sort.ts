// types/sort.ts
export type SortOption =
  | "best_match"
  | "price"
  | "ratings"
  | "price_low_high"
  | "price_high_low";

export const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Best Matches", value: "best_match" },
  { label: "Price", value: "price" },
  { label: "Ratings", value: "ratings" },
  { label: "Price - Low to High", value: "price_low_high" },
  { label: "Price - High to Low", value: "price_high_low" },
];
