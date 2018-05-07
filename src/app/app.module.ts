import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'ng2-datepicker-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UtenteService } from './services/utente.service';
import { HttpClientModule } from '@angular/common/http';
import { UtenteDetailComponet } from './components/utente/utente-detail/utente-detail.component';
import { UtenteComponent } from './components/utente/utente.component';

@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    UtenteDetailComponet
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DatePickerModule
  ],
  providers: [UtenteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
