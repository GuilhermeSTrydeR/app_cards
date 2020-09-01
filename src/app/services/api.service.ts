import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { 

  }

  public getCards(){

    return this.httpClient.get('https://deckofcardsapi.com/api/deck/m77o2bsh9pgk/draw/?count=1')

  }
}
