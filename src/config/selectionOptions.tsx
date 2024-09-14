// selectionOptions.ts
export interface Option {
  value: string | number;
  label: string;
}

export const sortOptions: Option[] = [
  { value: "relevance", label: "Relevance" },
  { value: "recent", label: "Recently Uploaded" },
  { value: "views", label: "Popularity" },
  { value: "a-z", label: "Title (A-Z)" },
  { value: "z-a", label: "Title (Z-A)" },
  { value: "longest", label: "Longest" },
  { value: "shortest", label: "Lhortest" },
];
