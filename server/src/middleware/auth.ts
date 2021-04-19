import { author } from "../constant";

export const auth = (req:any, res:any, next:any) => {
    const sign = req.headers.sign;
    const parsedAuthor = JSON.stringify(author);
    if(!sign ) res.status(403).send({message: "Not signature sended" });

    if(sign == parsedAuthor ){
        next();
    }else{
        res.status(403).send({message: "invalid signature" });
    }

}