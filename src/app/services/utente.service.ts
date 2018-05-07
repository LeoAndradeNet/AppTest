import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Utente } from '../models/utente';
import { SearchPayload } from '../models/search-payload';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class UtenteService {

    private urlApi = "api/utente";

    constructor(private http: HttpClient,
        private messageService: MessageService) { }

    /**
     * Funcao responsavel por pesquisar Utentes
     * @param {SearchPayload} search 
     * @returns {Utente[]} lista de utentes
     */
    search(search: SearchPayload): Observable<Utente[]> {
        return this.http.post<Utente[]>(this.urlApi, search, httpOptions).pipe(
            catchError(this.handleError<Utente[]>('Search'))
        );
    }

    /**
     * Funcao responsavel por atualizar o registro de Utente 
     * @param {Utente} utente 
     * @returns {string} texto
     */
    update(utente: Utente): Observable<string> {
        return this.http.put<string>(this.urlApi, utente, httpOptions).pipe(
            catchError(this.handleError<string>('Update'))
        );
    }

    /**
     * Funcao utiliza tratar erro
     * @param operation Nome da operacao
     * @param result 
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {            
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
    
    /**
     * Funcao utilizada para mostrar a mensagem de erro
     * @param message Conteudo da Messagem
     */
    private log(message: string) {
        this.messageService.add('Service: ' + message);
    }
}
