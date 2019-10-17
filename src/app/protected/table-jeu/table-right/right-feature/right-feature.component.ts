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
        title: 'aventure',
        bouton: 'créer / rejoindre'
      },
      {
        title: 'donjon',
        bouton: 'entrer'
      },
      {
        title: 'tuto',
        bouton: 'go !'
      }
    ];
  }

}
