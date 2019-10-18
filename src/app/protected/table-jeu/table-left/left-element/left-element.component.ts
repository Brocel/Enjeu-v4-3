import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enjeu-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.scss']
})
export class LeftElementComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() tabLabel: string;

  constructor() { }

  ngOnInit() {
  }
  dataColumns = ['propriete', 'valeur'];
  dataSrc;
}
export interface dataModel {
  propriete: string;
  valeur: string;
}
/*Profil component*/
const PROFIL_INFO_DATA: dataModel[] = [
  {propriete: 'e-mail', valeur: 'test@test2.com'},
  {propriete: 'ville', valeur: 'Test City'},
  {propriete: 'pays', valeur: 'France'},
  {propriete: 'Dispo', valeur: 'todo'},
];
const PROFIL_STATS_DATA: dataModel[] = [
  {propriete: 'parties jouées', valeur: '0'},
  {propriete: 'titre', valeur: 'Test City'},
  {propriete: 'pays', valeur: 'France'},
  {propriete: 'dispo', valeur: 'todo'},
];
const PROFIL_FRIENDS_DATA: dataModel[] = [
  {propriete: 'Nbr Compagnons', valeur: '0'},
  {propriete: 'Liste', valeur: 'todo component'},
  {propriete: 'Recherche', valeur: 'todo component'},
  {propriete: 'Invitation', valeur: '1'},
];
/*Stat component*/
const PERSO_MAIN_DATA: dataModel[] = [
  {propriete: 'niveau', valeur: '1'},
  {propriete: 'race', valeur: 'humain'},
  {propriete: 'sexe', valeur: 'homme'},
  {propriete: 'emploi', valeur: 'metier + spé'},
];
const PERSO_ACTION_DATA: dataModel[] = [
  {propriete: 'Rôle', valeur: 'MdJ/Joueur'},
  {propriete: 'select perso main', valeur: 'todo liste'},
  {propriete: 'detail perso', valeur: 'liste'},
  {propriete: 'suprrimer', valeur: 'liste'},
];
const PERSO_CREATION_DATA: dataModel[] = [
  {propriete: 'Créer un joueur', valeur: 'todo btn vers component'},
  {propriete: 'Créer un Mdj', valeur: 'todo btn vers component'},
  {propriete: 'Recherche', valeur: 'todo component'},
  {propriete: 'Invitation', valeur: '1'},
];
