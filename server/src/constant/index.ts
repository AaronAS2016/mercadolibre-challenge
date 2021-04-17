const API_BASE_URL = "https://api.mercadolibre.com"

export const API_SEARCH_ITEMS = `${API_BASE_URL}/sites/MLA/search?q=`;
export const API_SEARCH_ITEM =  `${API_BASE_URL}/items/:id`;
export const API_SEARCH_ITEM_DESCRIPTION =  `${API_BASE_URL}/items/:id/description`;

export const PORT = 8080;

export interface Author {
    name: string;
    lastName: string;
  }


export const author: Author = {
    name: "Aaron",
    lastName: "Saban",
};

export const MEDIUM_FILE_SIZE = "500"