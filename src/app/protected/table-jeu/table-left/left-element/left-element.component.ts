import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enjeu-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.scss']
})
export class LeftElementComponent implements OnInit {

  @Input() title: string;
  @Input() subTitre: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
