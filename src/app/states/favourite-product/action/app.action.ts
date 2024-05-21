// The “actions” are simply objects that represent a change in the state. They are sent to the store with the information that will change the store’s state.

import { createAction, props } from '@ngrx/store';
import { FavoriteProduct } from 'src/app/models/type-def';

enum ActionTypes {
  Add = '[Favourite Product] Add',
  Remove = '[Favourite Product] Remove',
  UpdateAll = '[Favourite Product] Update all state of favorites products',
  Clear = '[Favourite Product] Clear',
}

export const add = createAction(
  ActionTypes.Add,
  props<{ product: FavoriteProduct }>()
);
export const remove = createAction(
  ActionTypes.Remove,
  props<{ product: FavoriteProduct }>()
);
export const updateAllState = createAction(
  ActionTypes.UpdateAll,
  props<{ products: FavoriteProduct[] }>()
);
export const clear = createAction(ActionTypes.Clear);
