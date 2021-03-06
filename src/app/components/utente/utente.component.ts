import { Component, Input } from '@angular/core';
import { Utente } from '../../models/utente';
import { SearchPayload } from '../../models/search-payload';
import { UtenteService } from '../../services/utente.service';

@Component({
    selector: 'utente',
    templateUrl: './utente.component.html'
})

export class UtenteComponent {
    utentes: Utente[];
    @Input() searchPayload: SearchPayload = new SearchPayload();

    constructor(private utenteService: UtenteService){}

    /**
     * Funcao responsavel por pesquisar Utentes
     */
    search(): void {        
        this.utenteService.search(this.searchPayload)
            .subscribe(utentes => this.utentes = utentes);        
    }
}