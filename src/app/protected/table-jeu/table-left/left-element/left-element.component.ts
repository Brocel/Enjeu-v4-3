import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enjeu-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.scss']
})
export class LeftElementComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() tabLabel1: string;
  @Input() tabLabel2: string;
  @Input() tabLabel3: string;
  @Input() dataSrc1: string;
  @Input() dataSrc2: string;
  @Input() dataSrc3: string;

  constructor() { }

  ngOnInit() {

  }

}
