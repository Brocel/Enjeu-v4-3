import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-profil-stats',
  templateUrl: './profil-stats.component.html',
  styleUrls: ['./profil-stats.component.scss']
})
export class ProfilStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  statsColumns = ['propriete', 'valeur'];
  dataStats = STATS_DATA;
  }
  /*Profil : statistiques*/
  export interface StatsProfil {
    propriete: string;
    valeur: string;
  }

  const STATS_DATA: StatsProfil[] = [
    {propriete: 'Parties jouées', valeur: '0'},
    {propriete: 'Titre', valeur: 'Noob'},
    {propriete: 'Niv. Joueur', valeur: '1'},
    {propriete: 'Niv. MdJ', valeur: '1'},
  ];
