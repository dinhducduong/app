import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './screens/client/home-layout/home-layout.component';
import { HomeComponent } from './screens/client/home/home.component';
import { ProductComponent } from './screens/client/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailProductComponent } from './screens/client/product/detail-product/detail-product.component';
import { CartComponent } from './screens/client/product/cart/cart.component';
import { AboutComponent } from './screens/client/home-layout/layout/about/about.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { CurrencyPipe } from './Pipes/currency.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AdminLayoutComponent } from './screens/admin/admin-layout/admin-layout.component';
import { HomeAdminComponent } from './screens/admin/home-admin/home-admin.component';
import { ListCategoryComponent } from './screens/admin/categories/list-category/list-category.component';
import { AddCategoryComponent } from './screens/admin/categories/add-category/add-category.component';
import { EditCategoryComponent } from './screens/admin/categories/edit-category/edit-category.component';
import { NgxPaginationModule } from 'ngx-pagination';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    HomeComponent,
    ProductComponent,
    DetailProductComponent,
    CartComponent,
    AboutComponent,
    CurrencyPipe,
    AdminLayoutComponent,
    HomeAdminComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [CommonModule, NgxPaginationModule],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR' // 'de' for Germany, 'fr' for France ...
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
