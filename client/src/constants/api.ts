const baseURL = 'http://localhost:8080'

export const API_SEARCH_ITEMS = `${baseURL}?q=`;
export const API_SEARCH_ITEM =  `${baseURL}/api/items/`
export const AMOUNT_OF_ITEMS = 4;


export const author = {
    "name": "Aaron",
    "lastName": "Saban"
}


export const headers = { headers: { sign: JSON.stringify(author) } }