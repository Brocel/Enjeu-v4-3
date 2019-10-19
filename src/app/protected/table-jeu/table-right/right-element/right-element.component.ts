import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {
   }

  ngOnInit() {
  }

  affCompClick() {
      this.AFF_COMP=this.action;
      return console.log(this.AFF_COMP);
      return this.AFF_COMP;
  };


}

export const AFF_COMP: string = 'affDefaut';
