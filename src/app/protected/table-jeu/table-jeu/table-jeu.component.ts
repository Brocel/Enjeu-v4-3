import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-table-jeu',
  templateUrl: './table-jeu.component.html',
  styleUrls: ['./table-jeu.component.scss']
})
export class TableJeuComponent implements OnInit {

  titL1: string = "Profil Joueur";
  titL2: string = "Personnages";
  titR: string = "Commencer une partie";

  constructor() { }

  ngOnInit() {
  }

}
