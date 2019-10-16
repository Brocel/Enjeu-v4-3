import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'enjeu-table-profil',
  templateUrl: './table-profil.component.html',
  styleUrls: ['./table-profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableProfilComponent implements OnInit {

  nomJoueur: string = 'Brocel';

  constructor() { }

  ngOnInit() {
  }

}