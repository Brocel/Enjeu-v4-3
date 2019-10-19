/*Modules*/
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
/*Composants*/
import { TableRightComponent } from './table-right/table-right.component';
import { RightElementComponent } from './right-element/right-element.component';
import { RightFeatureComponent } from './right-feature/right-feature.component';


@NgModule({
  declarations: [
    TableRightComponent,
    RightElementComponent,
    RightFeatureComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TableRightComponent
  ]
})
export class TableRightModule { }
