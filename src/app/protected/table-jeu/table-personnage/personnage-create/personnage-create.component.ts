import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-personnage-create',
  templateUrl: './personnage-create.component.html',
  styleUrls: ['./personnage-create.component.scss']
})
export class PersonnageCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  createColumns = ['propriete', 'valeur'];
  dataCreate = CREATE_DATA;
  }
  /*Profil : statistiques*/
  export interface CreateProfil {
    propriete: string;
    valeur: string;
  }

  const CREATE_DATA: CreateProfil[] = [
    {propriete: 'Créer un joueur', valeur: 'todo btn vers component'},
    {propriete: 'Créer un Mdj', valeur: 'todo btn vers component'},
    {propriete: 'Recherche', valeur: 'todo component'},
    {propriete: 'Invitation', valeur: '1'},
  ];
