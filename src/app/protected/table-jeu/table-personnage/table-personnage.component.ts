import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'enjeu-table-personnage',
  templateUrl: './table-personnage.component.html',
  styleUrls: ['./table-personnage.component.scss']
})
export class TablePersonnageComponent implements OnInit {

  title: string= 'Personnage';

  ngOnInit() {
  }

}
