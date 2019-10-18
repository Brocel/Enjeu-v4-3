import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableJeuComponent } from './table-jeu/table-jeu.component';
/*components de Left*/
import { TableLeftComponent } from './table-left/table-left.component';
import { LeftElementComponent } from './table-left/left-element/left-element.component';
import { LeftFeatureComponent } from './table-left/left-feature/left-feature.component';
/*components de Center*/
import { TableCenterComponent } from './table-center/table-center.component';
import { TableHeadComponent } from './table-center/table-head/table-head.component';
import { TableAffichageComponent } from './table-center/table-affichage/table-affichage.component';
import { AffichageChatComponent } from './table-center/table-affichage/affichage-chat/affichage-chat.component';
import { AffichageCreateComponent } from './table-center/table-affichage/affichage-create/affichage-create.component';
import { AffichageDetailsComponent } from './table-center/table-affichage/affichage-details/affichage-details.component';
import { AffichageGameComponent } from './table-center/table-affichage/affichage-game/affichage-game.component';
import { AffichageDefautComponent } from './table-center/table-affichage/affichage-defaut/affichage-defaut.component';
/*components de Right*/
import { TableRightComponent } from './table-right/table-right.component';
import { RightElementComponent } from './table-right/right-element/right-element.component';
import { RightFeatureComponent } from './table-right/right-feature/right-feature.component';

@NgModule({
  declarations: [TableJeuComponent, TableAffichageComponent, AffichageChatComponent, AffichageCreateComponent, AffichageDetailsComponent, AffichageGameComponent, AffichageDefautComponent, TableLeftComponent, TableCenterComponent, TableRightComponent, TableHeadComponent, RightElementComponent, RightFeatureComponent, LeftElementComponent, LeftFeatureComponent],
  imports: [
    SharedModule
  ]
})
export class TableJeuModule { }
