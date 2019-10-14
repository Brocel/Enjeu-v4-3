import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-profil-infos',
  templateUrl: './profil-infos.component.html',
  styleUrls: ['./profil-infos.component.scss']
})
export class ProfilInfosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  infoColumns = ['propriete', 'valeur'];
  dataInfo = INFO_DATA;
  dataStats = STATS_DATA;
  }
/*Profil : informations*/
  export interface InfoProfil {
    propriete: string;
    valeur: string;
  }

  const INFO_DATA: InfoProfil[] = [
    {propriete: 'E-mail', valeur: 'test@test2.com'},
    {propriete: 'Ville', valeur: 'Test City'},
    {propriete: 'Pays', valeur: 'France'},
    {propriete: 'Dispo', valeur: 'todo'},
  ];

/*Profil : statistiques*/

  const STATS_DATA: InfoProfil[] = [
    {propriete: 'E-mail', valeur: 'userEmail'},
    {propriete: 'prop2', valeur: 'val2'},
    {propriete: 'prop3', valeur: 'val3'},
    {propriete: 'prop4', valeur: 'val4'},
  ];
