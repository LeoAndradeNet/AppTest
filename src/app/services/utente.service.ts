import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';
import { SearchPayload } from '../models/search-payload';

const httpOptions = {
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'})
};

@Injectable()
export class UtenteService {

    private urlApi = "api/utente";

    constructor(
        private http: HttpClient) { }

    searchUtente(search: SearchPayload): Observable<Utente[]> {

        return this.http.post<Utente[]>(this.urlApi, search, httpOptions);

    }

}
