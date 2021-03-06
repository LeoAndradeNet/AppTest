import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UtenteService } from './services/utente.service';
import { HttpClientModule } from '@angular/common/http';
import { UtenteDetailComponent } from './components/utente/utente-detail/utente-detail.component';
import { UtenteComponent } from './components/utente/utente.component';
import {APP_BASE_HREF} from '@angular/common';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    UtenteDetailComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [UtenteService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
