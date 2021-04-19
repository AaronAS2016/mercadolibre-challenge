import { CLIENT_FORBIDDEN_STATUS } from './../constant/http_status_codes';
import { author } from "../constant";

export const auth = (req:any, res:any, next:any) => {
    const sign = req.headers.sign;
    const parsedAuthor = JSON.stringify(author);
    if(!sign ) res.status(CLIENT_FORBIDDEN_STATUS).send({message: "Not signature sended" });

    if(sign == parsedAuthor ){
        next();
    }else{
        res.status(CLIENT_FORBIDDEN_STATUS).send({message: "invalid signature" });
    }

}