import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enjeu-right-element',
  templateUrl: './right-element.component.html',
  styleUrls: ['./right-element.component.scss']
})
export class RightElementComponent implements OnInit {

  @Input() title: string;
  @Input() subTitre: string;
  @Input() bouton: string;

  constructor() { }

  ngOnInit() {
  }

}
