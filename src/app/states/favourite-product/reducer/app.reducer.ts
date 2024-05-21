// The responsibility of the “reducer” is to process all necessary actions that will change the store's state. It receives as input the current state and the action and returns the new state after the change

import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/models/type-def';
import * as FavoriteActions from '../action/app.action';

export const initialState: AppState = {
  products: [],
};

export const favoriteReducer = createReducer(
  initialState,
    on(FavoriteActions.add, (state, { product }) => {
        console.log('dispatched')
      return {
        ...state,
        products: [...state.products, product],
      }
  }),
  on(FavoriteActions.remove, (state, { product }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== product.id),
  })),
  on(FavoriteActions.updateAllState, (state, { products }) => ({
    ...state,
    products,
  })),
  on(FavoriteActions.clear, (state) => initialState)
);
