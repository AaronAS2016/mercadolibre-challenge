import { Author } from './../constant/index';
import { author } from "../constant";

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
  }
  
  interface Price {
    currency: string;
    amount: number | null;
    decimals: number | null;
  }
  
  

  
  export const countDecimals = (value: number) => {
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
  
  export const getBestPrice = (prices: any): Price | undefined => {
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
  
  export const mapItemsResponse = (data: any): Items | null => {
    if (!data) return null;

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