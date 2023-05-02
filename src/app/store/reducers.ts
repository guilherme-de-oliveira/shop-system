import { createReducer, on } from '@ngrx/store';
// import { PostsStateInterface } from '../types/postsState.interface';
import { ICart } from '../models/cart.interface';
import * as PostsActions from './actions';

export const initialState: ICart = {
  products: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
//   on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getCart, (state, action) => ({
    ...state,
    products: action.products,
  })),
  on(PostsActions.getCartFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);
