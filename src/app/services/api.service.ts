import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  public getCards(){

    return this.httpClient.get('https://deckofcardsapi.com/api/deck/1hbza3m4uwwb/draw/?count=3')

  }
}
