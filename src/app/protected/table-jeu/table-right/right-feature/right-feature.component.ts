import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-right-feature',
  templateUrl: './right-feature.component.html',
  styleUrls: ['./right-feature.component.scss']
})
export class RightFeatureComponent implements OnInit {

  features;

  constructor() { }

  ngOnInit() {
    this.features = [
      {
        title: 'enjeu',/*dans game mettre aventure, donjon, tuto*/
        description: "Rejoindre une partie, un donjon ou s'entraîner",
        bouton: 'entrer',
        action: 'affGame'
      },
      {
        title: 'salon',
        description: "Discuter avec les rôlistes connectés",
        bouton: 'entrer',
        action: 'affChat'
      },
      {
        title: 'fiche personnage',
        description: "Afficher les détails du personnage principal",
        bouton: 'montrer',
        action: 'affDetails'
      },
      {
        title: 'nouveau personnage',
        description: "Créer un nouveau personnage",
        bouton: 'créer',
        action: 'affCreate'
      }
    ];
  }

}
