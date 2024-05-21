export interface FavoriteProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  isFavorite?: boolean;
}

export interface AppState {
  products: FavoriteProduct[];
}
