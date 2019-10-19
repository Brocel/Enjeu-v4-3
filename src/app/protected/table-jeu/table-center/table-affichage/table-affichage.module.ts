/*Modules*/
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
/*Composants*/
import { TableAffichageComponent } from './table-affichage/table-affichage.component';
import { AffichageChatComponent } from './affichage-chat/affichage-chat.component';
import { AffichageCreateComponent } from './affichage-create/affichage-create.component';
import { AffichageDetailsComponent } from './affichage-details/affichage-details.component';
import { AffichageGameComponent } from './affichage-game/affichage-game.component';
import { AffichageDefautComponent } from './affichage-defaut/affichage-defaut.component';


@NgModule({
  declarations: [
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
    TableAffichageComponent
  ]
})
export class TableAffichageModule { }
