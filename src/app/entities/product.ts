import { ElementEntity } from "./element";


export interface Product {
    id: number;
    name: string;
    code: string;
    image: string;
    brandId: number;
    brandName: string;
    quantity: number;
    status: boolean;
    lstElement: ElementEntity[];
}