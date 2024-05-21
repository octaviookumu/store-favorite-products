import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { favoriteReducer } from './states/favourite-product/reducer/app.reducer';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ favorite: favoriteReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
