import { Author } from "./../constant/index";
import { author } from "../constant";
import { countDecimals } from "./decimals";
import { getCategoriesByid } from "./url";

interface Items {
  author: Author;
  categories: string[];
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  location: string;
}

interface Price {
  currency: string;
  amount: number | null;
  decimals: number | null;
}

const getCategoriesByRoot = (pathFromRoot: any) => {
  return pathFromRoot.map((path: any) => path.name);
};

const getCategories = async (
  filters: any,
  available_filters: any
): Promise<string[]> => {
  if (filters.length === 0 && available_filters.length === 0) {
    return [];
  }

  let categories = [];
  let categoriesFilters = filters.find(
    (filter: any) => filter.id === "category"
  );
  if (categoriesFilters === undefined) {
    const categoriesAvailable = available_filters.find(
      (filter: any) => filter.id === "category"
    );

    const { id: mostItemsCategoriesId } = categoriesAvailable.values.reduce(
      (acc: any, current: any) => {
        return acc.results > current.results ? acc : current;
      }
    );

    categories = await getCategoriesByid(mostItemsCategoriesId);
  } else {
    categories = getCategoriesByRoot(
      categoriesFilters.values[0].path_from_root
    );
  }
  return categories;
};

export const mapItemsResponse = async (data: any): Promise<Items | null> => {
  if (!data) return null;

  const categories = await getCategories(
    data["filters"],
    data["available_filters"]
  );

  const items = data.results.map((item: any) => {
    const {
      id,
      title,
      thumbnail: picture,
      condition,
      shipping,
      seller_address,
      price: amount,
      currency_id: currency
    } = item;
    const { free_shipping } = shipping;
    const location = seller_address.state.name;

    return {
      id,
      title,
      price: {
        amount,
        currency,
        decimals: countDecimals(amount),

      },
      picture,
      condition,
      free_shipping,
      location,
    };
  });

  return {
    author,
    categories,
    items,
  };
};
