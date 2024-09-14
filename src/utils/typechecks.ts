export function isCategory(obj: any): obj is Category {
  return (
    typeof obj === "object" &&
    typeof obj.id === "number" &&
    typeof obj.category_name === "string" &&
    typeof obj.category_preview_url === "string"
  );
}

export function isLocation(obj: any): obj is Location {
  return (
    typeof obj === "object" &&
    typeof obj.id === "number" &&
    typeof obj.location_name === "string"
    // &&
    // typeof obj.location_preview_url === "string"
  );
}

export function isTag(obj: any): obj is Tag {
  return (
    typeof obj === "object" &&
    typeof obj.id === "number" &&
    typeof obj.tag_name === "string" &&
    typeof obj.tag_preview_url === "string"

    // &&
    // typeof obj.location_preview_url === "string"
  );
}

export function isApiResponse(obj: any): obj is ApiResponse {
  return (
    typeof obj === "object" &&
    Array.isArray(obj.categories) &&
    obj.categories.every(isCategory)
  );
}
