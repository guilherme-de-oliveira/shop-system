import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { reducers } from './store/product.reducers'

import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MainSearchComponent } from './components/main-search/main-search.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardItemGridComponent } from './components/card-item-grid/card-item-grid.component';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ButtonAddComponent } from './components/cart-options/cart-options.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
    ProductComponent,
    LoginComponent,
    CardItemComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainSearchComponent,
    CardItemGridComponent,
    ButtonAddComponent,
    CartListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    MenubarModule,
    SplitButtonModule,
    InputTextModule,
    RatingModule,
    TagModule,
    DataViewModule,
    DropdownModule,
    ToastModule,
    StoreModule.forRoot({
      products: reducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
