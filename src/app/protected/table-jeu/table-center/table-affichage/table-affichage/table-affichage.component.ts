import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-table-affichage',
  templateUrl: './table-affichage.component.html',
  styleUrls: ['./table-affichage.component.scss']
})
export class TableAffichageComponent implements OnInit {

  affComp:string ;

  // importOutput()

  constructor() {
  }

  ngOnInit() {
  }
  // testAffComp() {
  //   return console.log(this.affComp);
  // }
}
