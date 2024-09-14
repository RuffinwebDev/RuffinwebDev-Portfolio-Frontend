import axios from "axios";

export const selectCategories = async (categoryId: string | null) => {
  const url = "http://127.0.0.1:8000/api/category"; // Assuming the endpoint returns all categories
  const response = await axios.get(url, {
    params: {
      category: categoryId || undefined, // Only include if `categoryId` is not null
    },
  });
  return response.data;
};

export const selectLocations = async (locationId: string | null) => {
  const url = "http://127.0.0.1:8000/api/location"; // Assuming the endpoint returns all locations
  const response = await axios.get(url, {
    params: {
      location: locationId || undefined, // Only include if `locationId` is not null
    },
  });
  return response.data;
};

export const selectTags = async (tagId: string | null) => {
  const url = "http://127.0.0.1:8000/api/tags"; // Assuming the endpoint returns all tags
  const response = await axios.get(url, {
    params: {
      tag: tagId || undefined, // Only include if `tagId` is not null
    },
  });
  return response.data;
};
