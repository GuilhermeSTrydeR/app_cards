import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListagemPage } from '../listagem/listagem.page';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  deck = '1vnrfmme0cj6';

  public getCards(){

    return this.httpClient.get('https://deckofcardsapi.com/api/deck/'+ this.deck +'/draw/?count=1')

  }

  public getDeck(){

    return this.httpClient.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

  }

 
}
