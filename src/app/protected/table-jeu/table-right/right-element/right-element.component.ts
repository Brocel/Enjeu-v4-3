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
      AFF_COMP=this.action;
      return console.log(AFF_COMP);
      return AFF_COMP;
  };

}

export let AFF_COMP: string = 'affDefaut';
