import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ValidateComponent} from './admin/validate/validate.component';
import {ProductsComponent} from './admin/products/products.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DisplayCardComponent } from "./dashboard/display-card/display-card.component";
import { ListOfFinanceComponent } from "./dashboard/list-of-finance/list-of-finance.component";
import { ProductDetailsComponent } from "./dashboard/product-details/product-details.component";
const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'admin/validate',component:ValidateComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/displaycard',component:DisplayCardComponent},
  {path:'dashboard/listoffinance',component:ListOfFinanceComponent},
  {path:'dashboard/productdetails',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 
