import { API_SEARCH_ITEM } from "~/constants/api";

export const getRequest = async (url: string, options: any = {}) => {
    const req = await fetch(url, options);
    const data = await req.json();
    return data;
}


export const getItems = async (query: string | null) => {
    if (!query) { return []; }
    const url = API_SEARCH_ITEM + query;
    return await getRequest(url); 
}