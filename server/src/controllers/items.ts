import { API_SEARCH_ITEMS } from "./../constant/index";
import axios from "axios";

interface Items {
  author: Author;
  categories: string[];
  items: Item[];
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Price {
  currency: string;
  amount: number | null;
  decimals: number | null;
}

interface Author {
  name: string;
  lastName: string;
}

const countDecimals = (value: number) => {
  if (!value) return null;
  if (Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0;
};

const getCategories = (filters: any): string[] => {
  let categories = [];
  const categoiesFilters = filters.find(
    (filter: any) => filter.id === "category"
  );
  categories = categoiesFilters.values.map((category: any) => category.name);
  return categories;
};

const getBestPrice = (prices: any): Price | undefined => {
  if (!prices || prices.length === 0) {
    return undefined;
  }
  const discountPrice = prices.find((price: any) => price.type === "promotion");
  const price =
    discountPrice === undefined ?
    prices.find((price: any) => price.type === "standard") : discountPrice;


  const { currency_id: currency, amount } = price;
  const decimals = countDecimals(amount);
  return {
    currency,
    amount,
    decimals,
  };
};

const mapItemsResponse = (data: any): Items | null => {
  if (!data) return null;

  const author: Author = {
    name: "Aaron",
    lastName: "Saban",
  };

  const categories = getCategories(data["available_filters"]);

  const items = data.results.map((item: any) => {
    const { id, title, thumbnail: picture, condition, shipping } = item;
    const price = getBestPrice(item.prices?.prices);
    const { free_shipping } = shipping;

    return {
      id,
      title,
      price,
      picture,
      condition,
      free_shipping,
    };
  });

  return {
    author,
    categories,
    items,
  };
};

export const getItems = async (query: string) => {
  try {
    const items = await axios.get(API_SEARCH_ITEMS + query);
    return mapItemsResponse(items.data);
  } catch (error) {
    console.error(error);
  }
};
