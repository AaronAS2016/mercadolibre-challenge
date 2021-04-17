import { API_SEARCH_ITEMS } from "./../constant/index";
import axios from "axios";
import { mapItemsResponse } from "./../utils/items.mapper"

export const getItems = async (query: string) => {
  try {
    const items = await axios.get(API_SEARCH_ITEMS + query);
    return mapItemsResponse(items.data);
  } catch (error) {
    console.error(error);
  }
};
