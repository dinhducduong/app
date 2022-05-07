import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './screens/admin/admin-layout/admin-layout.component';
import { AddCategoryComponent } from './screens/admin/categories/add-category/add-category.component';
import { EditCategoryComponent } from './screens/admin/categories/edit-category/edit-category.component';
import { ListCategoryComponent } from './screens/admin/categories/list-category/list-category.component';
import { HomeAdminComponent } from './screens/admin/home-admin/home-admin.component';
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
  },
  {
    path: "cp-admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        component: HomeAdminComponent,
      },
      {
        path: "danh-muc",
        component: ListCategoryComponent,
      },
      {
        path: "danh-muc/add",
        component: AddCategoryComponent,
      },
      {
        path: "danh-muc/edit/:id",
        component: EditCategoryComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
