// The “selectors” are functions used to access and get specific information of state stored. Therefore they allow the components to request only the data necessary, instead of getting directly the complete state of the store, this makes the code more modular, reusable, and easy to maintain. Furthermore, they can make calc and transformation in the state before delivering to the component that requested it

// Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state:

// . Portability . Memoization . Composition . Testability . Type Safety
// When using the createSelector and createFeatureSelector functions @ngrx/store keeps track of the latest arguments in which your selector function was invoked. Because selectors are pure functions, the last result can be returned when the arguments match without reinvoking your selector function. This can provide performance benefits, particularly with selectors that perform expensive computation. This practice is known as memoization.

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState, FavoriteProduct } from 'src/app/models/type-def';

export const featureKey = 'favorite';

// Create a feature selector for the 'favourite' state
export const selectFeature = createFeatureSelector<AppState>(featureKey);

// get All favorites products
export const selectProducts = createSelector(
  selectFeature,
  (state: AppState) => state.products
);

// get One favorite product by ID
export const selectProductById = (productId: number) =>
  createSelector(selectProducts, (products: FavoriteProduct[]) =>
    products.find((product) => product.id === productId)
  );
