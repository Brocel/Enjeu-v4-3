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

  public affComp;

  constructor() {
   }

  ngOnInit() {
  }

  affCompClick() {
      this.affComp = this.action;
      return console.log(this.affComp);
      return this.affComp;
  };

}

export let AFF_COMP;
