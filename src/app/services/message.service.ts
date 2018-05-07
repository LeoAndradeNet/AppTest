import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  /**
   * Funcao responsável por adicionar uma mensagem
   * @param message 
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * Funcao responsavel por limpar mensagens
   */
  clear() {
    this.messages = [];
  }
}
