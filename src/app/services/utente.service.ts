import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';
import { SearchPayload } from '../models/search-payload';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class UtenteService {

    private urlApi = "api/utente";

    constructor(private http: HttpClient) { }

    /**
     * Funcao responsavel por pesquisar Utentes
     * @param {SearchPayload} search 
     * @returns {Utente[]} lista de utentes
     */
    search(search: SearchPayload): Observable<Utente[]> {
        return this.http.post<Utente[]>(this.urlApi, search, httpOptions);
    }

    /**
     * Funcao responsavel por atualizar o registro de Utente 
     * @param {Utente} utente 
     * @returns {string} texto
     */
    update(utente: Utente): Observable<string> {        
        return this.http.put<string>(this.urlApi, utente, httpOptions);        
    }
}
