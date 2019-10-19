/*Modules*/
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableLeftModule } from './table-left/table-left.module';
import { TableCenterModule } from './table-center/table-center.module';
import { TableRightModule } from './table-right/table-right.module';
/*Composants*/
import { TableJeuComponent } from './table-jeu/table-jeu.component';


@NgModule({
  declarations: [
    TableJeuComponent
  ],
  imports: [
    SharedModule,
    TableLeftModule,
    TableRightModule,
    TableCenterModule
  ]
})
export class TableJeuModule { }
