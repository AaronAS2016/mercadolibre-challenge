import {
  API_SEARCH_ITEMS,
  API_SEARCH_ITEM,
  API_SEARCH_ITEM_DESCRIPTION,
} from "./../constant/index";
import axios from "axios";
import { mapItemsResponse } from "./../utils/items.mapper";
import { buildURLItem } from "../utils/url";
import { mapItemResponse } from "../utils/item.mapper";

export const getItems = async (query: string, limit: string | undefined) => {
  try {
    let urlQuery = API_SEARCH_ITEMS + query;
    if (limit) urlQuery += "&limit=" + limit;
    const items = await axios.get(urlQuery);
    return await mapItemsResponse(items.data);
  } catch (error) {
    console.error(error);
  }
};

export const getItem = async (id: string) => {
  try {
    const item = await axios.get(buildURLItem(API_SEARCH_ITEM, id));
    const itemDescriptions = await axios.get(
      buildURLItem(API_SEARCH_ITEM_DESCRIPTION, id)
    );
    return await mapItemResponse(item.data, itemDescriptions.data);
  } catch (error) {
    throw new Error(error);
  }
};
