import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-left-feature',
  templateUrl: './left-feature.component.html',
  styleUrls: ['./left-feature.component.scss']
})
export class LeftFeatureComponent implements OnInit {

  features;
  constructor() { }

  ngOnInit() {
    this.features = [
      {
        name: 'Brocel',
        icon: '../../../../assets/img/icons/mdjIcone.jpg',
        tabLabel: 'Informations',
        dataSrc:  PROFIL_INFO_DATA,
        dataColumns: ['propriete', 'valeur']
      },
    ];
  }
}
