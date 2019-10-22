import { Component, OnInit } from '@angular/core';
import { AffCompCenterService } from 'src/app/shared/services/aff-comp-center.service';

@Component({
  selector: 'enjeu-table-affichage',
  templateUrl: './table-affichage.component.html',
  styleUrls: ['./table-affichage.component.scss']
})
export class TableAffichageComponent implements OnInit {

  affCenterComp: string;


  constructor(private dataAffComp: AffCompCenterService) {
    this.affCenterComp = this.dataAffComp.affComp ;
  }

  ngOnInit() {
  }
  testAffComp() {
    return console.log(this.affCenterComp);
  }
}
