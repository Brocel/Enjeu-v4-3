import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-left-feature',
  templateUrl: './left-feature.component.html',
  styleUrls: ['./left-feature.component.scss']
})
export class LeftFeatureComponent implements OnInit {

  features;
  dataInfo;

  constructor() { }

  ngOnInit() {
    this.features = [
      {
        name: 'Brocel',
        icon: '../../../../assets/img/icons/mdjIcone.jpg',
        tabLabel: 'Informations',
        dataSrc: INFO_DATA,
        dataColumns: ['propriete', 'valeur']
      }
    ];
  }
}

export interface dataModel {
  propriete: string;
  valeur: string;
}
const INFO_DATA: dataModel[] = [
  {propriete: 'E-mail', valeur: 'test@test2.com'},
  {propriete: 'Ville', valeur: 'Test City'},
  {propriete: 'Pays', valeur: 'France'},
  {propriete: 'Dispo', valeur: 'todo'},
];
