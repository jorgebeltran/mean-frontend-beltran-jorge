import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormEditComponent } from './user-form-edit/user-form-edit.component';
import { UserFormCreateComponent } from './user-form-create/user-form-create.component';
import { HomeComponent } from './home/home.component';
import { HttpClient } from 'selenium-webdriver/http';
import { UserService } from './services/user.service';import { UserViewComponent } from './user-view/user-view.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInjectorService } from "./services/token-injector.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserListComponent,
    UserFormEditComponent,
    UserFormCreateComponent,
    HomeComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [UserService,
    {
           provide: HTTP_INTERCEPTORS,
            useClass: TokenInjectorService,
          multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
