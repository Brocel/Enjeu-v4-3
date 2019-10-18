import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'enjeu-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.scss']
})
export class LeftElementComponent implements OnInit {

  @Input() name: string;
  @Input() icon: string;
  @Input() tabLabel: string;
  @Input() dataSrc: any;
  @Input() dataColumns: any;

  constructor() { }

  ngOnInit() {
  }

}
