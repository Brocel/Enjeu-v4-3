/*Modules*/
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableLeftModule } from './table-left/table-left.module';
import { TableCenterModule } from './table-center/table-center.module';
import { TableRightModule } from './table-right/table-right.module';
/*Composants*/
import { TableJeuComponent } from './table-jeu/table-jeu.component';
import { TableRightComponent } from './table-right/table-right.component';
import { RightElementComponent } from './table-right/right-element/right-element.component';
import { RightFeatureComponent } from './table-right/right-feature/right-feature.component';

@NgModule({
  declarations: [TableJeuComponent, TableRightComponent, RightElementComponent, RightFeatureComponent],
  imports: [
    SharedModule,
    TableLeftModule,
    TableRightModule,
    TableCenterModule
  ]
})
export class TableJeuModule { }
