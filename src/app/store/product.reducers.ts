import { createReducer, on } from '@ngrx/store';
import { ICart } from 'src/shared/interfaces';
import * as PostsActions from './product.actions';

export const initialState: ICart = {
  products: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(PostsActions.getCart, (state) => ({
    ...state,
  })),
  on(PostsActions.postCart, (state, action) => {
    state = {
      ...state,
      products: [...state.products, action.products]
    }

    return state;
  }),
  on(PostsActions.removeItemFromCart, (state, action) => {
    const products = [...state.products];
    const index = products.findIndex(x => x.id === action.product.id);
    products.splice(index, 1);
    
    state = {
      ...state,
      products: products
    }

    return state;
  }),
  on(PostsActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
