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
    console.log(action)
    state = {
      ...state,
      products: [...state.products, action.products]
    }

    console.log(state.products)
    return state;
  }),
  on(PostsActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
