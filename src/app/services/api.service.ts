import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  deck = '4n8c0gmtusdb';

  public getCards(){

    return this.httpClient.get('https://deckofcardsapi.com/api/deck/'+ this.deck +'/draw/?count=1')

  }

 
}
