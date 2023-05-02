import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { IProduct } from 'src/shared/interfaces';

export const selectItems = createFeatureSelector<ReadonlyArray<IProduct>>('products');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<CartModel>
>('books');

export const selectBookCollection = createSelector(
  selectItems,
  selectCollectionState,
  (books, collection) => {
    return books.map((product) => product);
  }
);
