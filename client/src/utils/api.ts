import { headers } from "./../constants/api";
import { API_SEARCH_ITEM, API_SEARCH_ITEMS } from "~/constants/api";

export const getRequest = async (url: string, options: any = {}) => {
  const req = await fetch(url, { ...options });
  const data = await req.json();
  return data;
};

export const getItems = async (query: string | null | undefined) => {
  if (!query) {
    return [];
  }
  try {
    const url = API_SEARCH_ITEMS + query;
    return await getRequest(url, headers);
  } catch (error) {
    return () => {
      throw new Error(error);
    };
  }
};

export const getItem = async (id: string | null | undefined) => {
  if (!id) {
    return [];
  }
  try {
    const url = API_SEARCH_ITEM + id;
    return await getRequest(url, headers);
  } catch (error) {
    return () => {
      throw new Error(error);
    };
  }
};
