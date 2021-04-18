import { MEDIUM_FILE_SIZE } from './../constant/index';
import { Item } from './items.mapper';
import { countDecimals } from './decimals';
import { Author, author } from './../constant/';
import { getPicture } from './url';

interface SearchItem { 
    author: Author;
    item: DescriptionItem;
}

interface DescriptionItem  extends Item {
    sold_quantity: string;
    description: string;    
}


export const mapItemResponse = (dataItem: any, dataItemDescription: any) : SearchItem | null => {
    if(!dataItem && !dataItemDescription) {
        return null;
    }

    const { id, title,  sold_quantity, currency_id: currency, condition, shipping, pictures, price } = dataItem;
    const { plain_text: description } = dataItemDescription;
    const { free_shipping } = shipping;
    

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
            sold_quantity, 
            description
        } 
    }
} 