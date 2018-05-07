import { Component, Input } from "@angular/core";
import { Utente } from "../../../models/utente";
import { UtenteService } from "../../../services/utente.service";

@Component({
  selector: 'utente-detail',
  templateUrl: './utente-detail.component.html',
})

export class UtenteDetailComponent {
  @Input() utente: Utente;

  constructor(private utenteService: UtenteService) { }

  /**
   * Funcao responsavel por atualizar o Utente
   */
  update() {    
    this.utenteService.update(this.utente)
      .subscribe(retorno => { alert("Atualizado com sucesso.") });    
  }
}