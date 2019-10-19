import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableJeuComponent } from './table-jeu/table-jeu.component';
/*module de Left*/
import { TableLeftModule } from './table-left/table-left.module';
/*module de Center*/

/*module de Right*/
import { TableRightComponent } from './table-right/table-right.component';
import { RightElementComponent } from './table-right/right-element/right-element.component';
import { RightFeatureComponent } from './table-right/right-feature/right-feature.component';
import { TableRightModule } from './table-right/table-right.module';
import { TableCenterModule } from './table-center/table-center.module';

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
