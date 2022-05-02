import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './screens/client/home-layout/home-layout.component'
import { HomeComponent } from './screens/client/home/home.component'
import { CartComponent } from './screens/client/product/cart/cart.component';
import { DetailProductComponent } from './screens/client/product/detail-product/detail-product.component';
import { ProductComponent } from './screens/client/product/product.component';
const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },

      {
        path: "san-pham",
        component: ProductComponent
      },
      {
        path: "san-pham/chi-tiet-san-pham/:id",
        component: DetailProductComponent
      },
      {
        path: "gio-hang",
        component: CartComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
