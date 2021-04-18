import { API_SEARCH_ITEM, API_SEARCH_ITEMS } from "~/constants/api";

export const getRequest = async (url: string, options: any = {}) => {
    const req = await fetch(url, options);
    const data = await req.json();
    return data;
}


export const getItems = async (query: string | null | undefined) => {
    if (!query) { return []; }
    const url = API_SEARCH_ITEMS + query;
    return await getRequest(url); 
}

export const getItem = async (id: string | null | undefined) => {
    if (!id) { return []; }
    const url = API_SEARCH_ITEM + id;
    return await getRequest(url); 
}