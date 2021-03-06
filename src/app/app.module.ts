import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routing } from './app.routing';
import { UserService } from './service/user.service';
import { TResolver } from './Shared/resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    UserService,
    TResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
