/*Modules*/
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableAffichageModule } from './table-affichage/table-affichage.module';
/*Composants*/
import { TableCenterComponent } from './table-center/table-center.component';
import { TableHeadComponent } from './table-head/table-head.component';



@NgModule({
  declarations: [
    TableCenterComponent,
    TableHeadComponent
  ],
  imports: [
    SharedModule,
    TableAffichageModule
  ],
  exports: [
    TableCenterComponent
  ]
})
export class TableCenterModule { }
