export const buildURLItem = (url:string, id:string) => {
    return url.replace(":id", id);
}

export const getPicture = (pictures: any, size: string) => {
    const picture = pictures.find((picture: any) => picture.size.includes(size));
    return picture.secure_url;
}