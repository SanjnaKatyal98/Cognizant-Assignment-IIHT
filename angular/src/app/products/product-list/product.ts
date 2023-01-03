/*export enum Category{
    Food="food",
    Cosmetics="cosmetic",
    Clothing="clothing",
    Furniture="furniture",
    All="everything"
};
export interface IProduct{
    id:number;
    name:string;
    category:Category;
    price:number;
    image:string;
    rating:number;
    quantity: number;
}*/
export enum Categories{
    All="all",
    Food="food",
    Cosmetics="cosmetic",
    Clothing="clothing",
    Furniture="furniture"
};

export interface IProduct{
    id:number ,
    name:string,
    price:number,
    image: string,
    category: Categories ,
    rating: number,
    quantity:number
}