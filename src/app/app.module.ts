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
import { ReactiveFormsModule } from '@angular/forms';
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
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR' // 'de' for Germany, 'fr' for France ...
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
