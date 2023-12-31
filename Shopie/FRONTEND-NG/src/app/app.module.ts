import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { AdminAsideComponent } from './admin-aside/admin-aside.component';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

import { UserNavigationComponent } from './user-navigation/user-navigation.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http'
import { InterceptorService } from './services/interceptor.service';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { CartComponent } from './cart/cart.component';
import { FlashmessagesComponent } from './flashmessages/flashmessages.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    RegistrationComponent,
    LoginComponent,
    NewproductComponent,
    AdminAsideComponent,
    AdminlandingComponent,
    LandingpageComponent,
    UserNavigationComponent,
    ProductsComponent,
    CustomersComponent,
    ProductlistComponent,
    OrdersComponent,
    ProfileComponent,
    UserdashboardComponent,
    UserOrdersComponent,
    CartComponent,
    FlashmessagesComponent
    
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
