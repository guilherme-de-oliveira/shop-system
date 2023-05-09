import { createAction, props } from "@ngrx/store";
import { IProduct } from "src/shared/interfaces";

export const getCart = createAction(
    '[Cart] Get Cart Items',
);

export const postCart = createAction(
    '[Cart] Post Cart',
    props<{ products: IProduct }>()
);

export const removeItemFromCart = createAction(
    '[Cart] Remove Item from Cart',
    props<{ product: IProduct }>()
)
export const getCartFailure = createAction(
    '[Cart] Get Cart failure',
    props<{ error: string }>()
  );