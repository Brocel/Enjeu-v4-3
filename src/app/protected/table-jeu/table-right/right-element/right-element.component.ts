import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() actionOutput = new EventEmitter<string>();

  exportOutput(affCompOutput) {
    this.actionOutput.emit(affCompOutput);
    return console.log(affCompOutput);
  }

  constructor() {
   }

  ngOnInit() {
  }

}
