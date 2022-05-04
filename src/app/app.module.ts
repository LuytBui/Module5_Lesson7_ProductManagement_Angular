import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './product/list/list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './product/create/create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './product/edit/edit.component';
import { DeleteComponent } from './product/delete/delete.component';
import {LoginComponent} from './login/login.component';
import {JwtInterceptor} from './service/helper/jwt-interceptor';
import {ErrorInterceptor} from './service/helper/error-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor  ,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
