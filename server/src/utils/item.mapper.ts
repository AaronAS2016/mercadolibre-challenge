import { MEDIUM_FILE_SIZE } from './../constant/index';
import { Item } from './items.mapper';
import { countDecimals } from './decimals';
import { Author, author } from './../constant/';
import { getCategoriesByid, getPicture } from './url';

interface SearchItem { 
    author: Author;
    item: DescriptionItem;
    categories: string[]    
}

interface DescriptionItem  extends Item {
    sold_quantity: string;
    description: string;
    link: string;
}


export const mapItemResponse = async (dataItem: any, dataItemDescription: any) : Promise<SearchItem | null> => {
    if(!dataItem && !dataItemDescription) {
        return null;
    }

    const { id, title,  sold_quantity, currency_id: currency, condition, shipping, pictures, price, seller_address, category_id, permalink } = dataItem;
    const { plain_text: description } = dataItemDescription;
    const { free_shipping } = shipping;
    const location = seller_address.state.name;
    const categories = await  getCategoriesByid(category_id);

    return {
        author,
        item: {
            id, 
            title, 
            price: {
                currency,
                amount: price,
                decimals: countDecimals(price)
            },
            picture: getPicture(pictures, MEDIUM_FILE_SIZE),
            condition,
            free_shipping,
            location,
            sold_quantity, 
            description,
            link: permalink
        },
        categories
    }
} 
