import { Component, OnInit } from '@angular/core';
import {PROFIL_INFO_DATA} from 'src/app/shared/mocks/mock-datas-left-panel-test';
import {PROFIL_STATS_DATA} from 'src/app/shared/mocks/mock-datas-left-panel-test';
import {PROFIL_FRIENDS_DATA} from 'src/app/shared/mocks/mock-datas-left-panel-test';
import {PERSO_MAIN_DATA} from 'src/app/shared/mocks/mock-datas-left-panel-test';
import {PERSO_ACTION_DATA} from 'src/app/shared/mocks/mock-datas-left-panel-test';
import {PERSO_CREATION_DATA} from 'src/app/shared/mocks/mock-datas-left-panel-test';

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
        name: 'brocel',
        icon: '../../../../assets/img/icons/mdjIcone.jpg',
        tabLabel: {
          tab1: 'Informations',
          tab2: 'Statistiques',
          tab3: 'Compagnons'
        },
        dataSrc: {
          tab1: PROFIL_INFO_DATA,
          tab2: PROFIL_STATS_DATA,
          tab3: PROFIL_FRIENDS_DATA
        }
      },
      {
        name: 'metalchemist',
        icon: '../../../../assets/img/icons/humHom.jpg',
        tabLabel: {
          tab1: 'Main',
          tab2: 'Actions',
          tab3: 'Création'
        },
        dataSrc: {
          tab1: PERSO_MAIN_DATA,
          tab2: PERSO_ACTION_DATA,
          tab3: PERSO_CREATION_DATA
        }
      }
    ];
  }
}
