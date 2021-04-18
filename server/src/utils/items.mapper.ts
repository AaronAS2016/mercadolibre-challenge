import { Author } from './../constant/index';
import { author } from "../constant";
import { countDecimals } from './decimals';

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
  
  

  const getCategories = (filters: any, available_filters: any): string[] => {

    if(filters.length === 0 && available_filters.length === 0) { return []; }

    let categories = [];
    let categoriesFilters = filters.find(
      (filter: any) => filter.id === "category"
    );
    categoriesFilters = categoriesFilters === undefined ? available_filters.find(
      (filter: any) => filter.id === "category"
    ) : categoriesFilters;

    if(categoriesFilters === undefined ){ console.log(filters, available_filters) }

    categories = categoriesFilters.values.map((category: any) => category.name);
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

    const categories = getCategories(data["filters"], data["available_filters"]);
  
    const items = data.results.map((item: any) => {
      const { id, title, thumbnail: picture, condition, shipping, seller_address } = item;
      const price = getBestPrice(item.prices?.prices);
      const { free_shipping } = shipping;
      const location = seller_address.state.name
  
      return {
        id,
        title,
        price,
        picture,
        condition,
        free_shipping,
        location
      };
    });
  
    return {
      author,
      categories,
      items,
    };
  };