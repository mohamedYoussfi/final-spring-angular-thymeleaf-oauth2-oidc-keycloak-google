import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {ProductsComponent} from "./products/products.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path : "customers", component : CustomersComponent},
  { path : "products", component : ProductsComponent, canActivate:[AuthGuard], data : { roles:['USER'] }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
