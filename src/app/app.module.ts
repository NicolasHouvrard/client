import { ClientService } from './service/client.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import  { ClientsModule} from './Features/clients/clients.module';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


  ],
  imports: [
    HttpClientModule,
    NgOptimizedImage,
    BrowserModule,
    AppRoutingModule,
    ClientsModule,
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
