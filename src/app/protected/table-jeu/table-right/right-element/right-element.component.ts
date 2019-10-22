import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AffCompCenterService } from 'src/app/shared/services/aff-comp-center.service';

@Component({
  selector: 'enjeu-right-element',
  templateUrl: './right-element.component.html',
  styleUrls: ['./right-element.component.scss']
})
export class RightElementComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() bouton: string;
  @Input() action: string;

  dataAffComp: any;

  constructor(private sharedData: AffCompCenterService) {}

  getComp() {

    this.dataAffComp = this.sharedData.setComp(this.action);

    // this.sharedData.affComp = this.action;
    // this.dataAffComp = this.sharedData.affComp ;
    // console.log(this.action);
    console.log(this.dataAffComp);
    return this.dataAffComp;
  }


  ngOnInit() {
  }


}
