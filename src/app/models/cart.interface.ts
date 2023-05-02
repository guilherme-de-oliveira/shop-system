import { IProduct } from 'src/shared/interfaces';

export interface ICart {
    products: IProduct[],
    error: string | null
}