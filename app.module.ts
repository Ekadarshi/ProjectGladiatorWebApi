import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ValidateComponent } from './admin/validate/validate.component';
import { ProductsComponent } from './admin/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
<<<<<<< HEAD
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayCardComponent } from './dashboard/display-card/display-card.component';
import { ListOfFinanceComponent } from './dashboard/list-of-finance/list-of-finance.component';
import { ProductDetailsComponent } from './dashboard/product-details/product-details.component';
=======
import { ProductComponent } from './product/product.component';
>>>>>>> 45c1ff3e45ef67634c27d0c902997b0d8ddb2eaf
 
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ValidateComponent,
    ProductsComponent,
<<<<<<< HEAD
    DashboardComponent,
    DisplayCardComponent,
    ListOfFinanceComponent,
    ProductDetailsComponent
=======
    ProductComponent
>>>>>>> 45c1ff3e45ef67634c27d0c902997b0d8ddb2eaf
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
