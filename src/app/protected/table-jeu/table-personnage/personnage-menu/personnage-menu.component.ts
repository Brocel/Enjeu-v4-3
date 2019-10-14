import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-personnage-menu',
  templateUrl: './personnage-menu.component.html',
  styleUrls: ['./personnage-menu.component.scss']
})
export class PersonnageMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  menuColumns = ['propriete', 'valeur'];
  dataMenu = MENU_DATA;
  }
  /*Profil : statistiques*/
  export interface MenuProfil {
    propriete: string;
    valeur: string;
  }

  const MENU_DATA: MenuProfil[] = [
    {propriete: 'Rôle', valeur: 'MdJ/Joueur'},
    {propriete: 'select perso main', valeur: 'todo liste'},
    {propriete: 'detail perso', valeur: 'liste'},
    {propriete: 'suprrimer', valeur: 'liste'},
  ];
