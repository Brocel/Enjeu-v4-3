import { Component, OnInit } from '@angular/core';
import { AFF_COMP } from '../../../table-right/right-element/right-element.component';

@Component({
  selector: 'enjeu-table-affichage',
  templateUrl: './table-affichage.component.html',
  styleUrls: ['./table-affichage.component.scss']
})
export class TableAffichageComponent implements OnInit {

  affComp = AFF_COMP;

  constructor() {
  }

  ngOnInit() {
  }
  testAffComp() {
    return console.log(this.affComp);
  }
}
