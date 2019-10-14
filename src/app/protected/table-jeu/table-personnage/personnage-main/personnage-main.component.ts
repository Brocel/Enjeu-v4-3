import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-personnage-main',
  templateUrl: './personnage-main.component.html',
  styleUrls: ['./personnage-main.component.scss']
})
export class PersonnageMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dataMain = MAIN_DATA;
}
export interface MainPersonnage {
  nom: string;
  imgUrl: string;
  niveau: number;
  race: string;
  sexe: string;
  metier: string;
  specialite: string;
  histoire: string;
}

const MAIN_DATA: MainPersonnage = {
  nom: 'Metalchemist',
  imgUrl: '../../../../assets/img/icons/humHom.jpg',
  niveau: 1,
  race: 'Humain',
  sexe: 'Homme',
  metier: 'Sage',
  specialite: 'Alchimie',
  histoire: 'Il était une fois....',
};
