import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, FavoriteProduct } from 'src/app/models/type-def';
import { add } from 'src/app/states/favourite-product/action/app.action';
import { selectProducts } from 'src/app/states/favourite-product/selector/app.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  favoriteProducts$!: Observable<FavoriteProduct[] | undefined>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.favoriteProducts$ = this.store.pipe(select(selectProducts));
    this.addProduct();
  }

  addProduct() {
    let product: FavoriteProduct = {
      id: 1,
      name: 'First Product',
      price: 20,
      image: 'bzzt',
    };

    this.store.dispatch(add({ product }));
  }
}
