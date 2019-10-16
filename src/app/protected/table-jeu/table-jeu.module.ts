import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableJeuComponent } from './table-jeu/table-jeu.component';
/*Données*/
import { CardDatasComponent } from './datas/card-datas/card-datas.component';

/*components de Left*/
import { TableLeftComponent } from './table-left/table-left.component';
import { TableProfilComponent } from './table-left/table-profil/table-profil.component';
import { LeftCardComponent } from './table-left/left-card/left-card.component';
import { ProfilStatsComponent } from './table-left/table-profil/profil-stats/profil-stats.component';
import { ProfilInfosComponent } from './table-left/table-profil/profil-infos/profil-infos.component';
import { ProfilFriendsComponent } from './table-left/table-profil/profil-friends/profil-friends.component';
import { TablePersonnageComponent } from './table-left/table-personnage/table-personnage.component';
import { PersonnageMainComponent } from './table-left/table-personnage/personnage-main/personnage-main.component';
import { PersonnageMenuComponent } from './table-left/table-personnage/personnage-menu/personnage-menu.component';
import { PersonnageCreateComponent } from './table-left/table-personnage/personnage-create/personnage-create.component';
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
import { TableAventureComponent } from './table-right/table-aventure/table-aventure.component';
import { TableDonjonComponent } from './table-right/table-donjon/table-donjon.component';
import { TableTutoComponent } from './table-right/table-tuto/table-tuto.component';
import { RightCardComponent } from './models/cards/right-card/right-card.component';
import { LeftTableComponent } from './models/tables/left-table/left-table.component';
import { RightTableComponent } from './models/tables/right-table/right-table.component';




@NgModule({
  declarations: [TableJeuComponent, TableProfilComponent, TablePersonnageComponent, TableAventureComponent, TableDonjonComponent, TableTutoComponent, ProfilStatsComponent, ProfilInfosComponent, ProfilFriendsComponent, PersonnageMainComponent, PersonnageMenuComponent, PersonnageCreateComponent, TableAffichageComponent, AffichageChatComponent, AffichageCreateComponent, AffichageDetailsComponent, AffichageGameComponent, AffichageDefautComponent, TableLeftComponent, TableCenterComponent, TableRightComponent, TableHeadComponent, LeftCardComponent, CardDatasComponent, RightCardComponent, LeftTableComponent, RightTableComponent],
  imports: [
    SharedModule
  ]
})
export class TableJeuModule { }
