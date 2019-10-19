/*Modules*/
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
/*Composants*/
import { TableLeftComponent } from './table-left/table-left.component';
import { LeftElementComponent } from './left-element/left-element.component';
import { LeftFeatureComponent } from './left-feature/left-feature.component';


@NgModule({
  declarations: [
    TableLeftComponent,
    LeftElementComponent,
    LeftFeatureComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TableLeftComponent
  ]
})
export class TableLeftModule { }
