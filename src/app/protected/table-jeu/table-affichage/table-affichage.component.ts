import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-table-affichage',
  templateUrl: './table-affichage.component.html',
  styleUrls: ['./table-affichage.component.scss']
})
export class TableAffichageComponent implements OnInit {

  private affDefaut: boolean;
  private affChat: boolean;
  private affCreate: boolean;
  private affDetails: boolean;
  private affGame: boolean;

  constructor() {
    this.affDefaut = true;
    this.affChat = false;
    this.affCreate = false;
    this.affDetails = false;
    this.affGame = false;
  }

  ngOnInit() {
  }



}
