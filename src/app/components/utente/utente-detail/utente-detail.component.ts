import { Component, Input } from "@angular/core";
import { Utente } from "../../../models/utente";

@Component({
  selector: 'utente-detail',
  templateUrl: './utente-detail.component.html',
})

export class UtenteDetailComponet {
  @Input() utente: Utente;
}