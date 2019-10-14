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
  infoColumns = ['propriete', 'valeur'];
  dataInfo = INFO_DATA;
  }

  export interface InfoProfil {
    propriete: string;
    valeur: number;
  }

  const INFO_DATA: InfoProfil[] = [
    {propriete: 'E-mail', valeur: 'userEmail'},
    {propriete: 'prop2', valeur: 'val2'},
    {propriete: 'prop3', valeur: 'val3'},
    {propriete: 'prop4', valeur: 'val4'},
  ];
