import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {

  public cards = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    console.log(this.apiService.getCards())
  


  }

}
