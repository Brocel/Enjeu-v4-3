import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableCenterComponent } from './table-center/table-center.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { TableAffichageComponent } from './table-affichage/table-affichage.component';
import { AffichageChatComponent } from './table-affichage/affichage-chat/affichage-chat.component';
import { AffichageCreateComponent } from './table-affichage/affichage-create/affichage-create.component';
import { AffichageDetailsComponent } from './table-affichage/affichage-details/affichage-details.component';
import { AffichageGameComponent } from './table-affichage/affichage-game/affichage-game.component';
import { AffichageDefautComponent } from './table-affichage/affichage-defaut/affichage-defaut.component';


@NgModule({
  declarations: [
    TableCenterComponent,
    TableHeadComponent,
    TableAffichageComponent,
    AffichageChatComponent,
    AffichageCreateComponent,
    AffichageDetailsComponent,
    AffichageGameComponent,
    AffichageDefautComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TableCenterComponent
  ]
})
export class TableCenterModule { }
