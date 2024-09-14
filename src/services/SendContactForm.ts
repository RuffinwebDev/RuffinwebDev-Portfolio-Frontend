import axios from "axios";

export const searchVideos = async (
  categoryId: string | null,
  locationId: string | null,
  tagIds: string | number[], // Corrected variable name
) => {
  const url = "http://127.0.0.1:8000/api/videos/";
  const response = await axios.get(url, {
    params: {
      category: categoryId || undefined,
      location: locationId || undefined,
      tags: tagIds.length ? tagIds : undefined, // Ensure only non-empty tag arrays are passed
    },
  });

  console.log(url);
  return response.data;
};
