import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  public getCards(){

    return this.httpClient.get('http://deckofcardsapi.com/api/deck/y52ww67bcsxb/draw/?count=3')

  }
}
