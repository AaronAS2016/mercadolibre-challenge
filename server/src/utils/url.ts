import axios from "axios";
import { API_SEARCH_CATEGORY } from "../constant";

export const buildURLItem = (url: string, id: string) => {
  return url.replace(":id", id);
};

export const getPicture = (pictures: any, size: string) => {
  const picture = pictures.find((picture: any) => picture.size.includes(size));
  return picture.secure_url;
};

export const getCategoriesByid = async (id: string) => {
  const response = await axios.get(API_SEARCH_CATEGORY + id);

  return response.data.path_from_root.map((path: any) => path.name);
};
