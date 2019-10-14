import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableJeuComponent } from './table-jeu/table-jeu.component';
import { TableChatComponent } from './table-chat/table-chat.component';
import { TableProfilComponent } from './table-profil/table-profil.component';
import { TablePersonnageComponent } from './table-personnage/table-personnage.component';
import { TableAventureComponent } from './table-aventure/table-aventure.component';
import { TableDonjonComponent } from './table-donjon/table-donjon.component';
import { TableTutoComponent } from './table-tuto/table-tuto.component';
import { TableHeadComponent } from './table-head/table-head.component';
import { ProfilStatsComponent } from './table-profil/profil-stats/profil-stats.component';
import { ProfilInfosComponent } from './table-profil/profil-infos/profil-infos.component';
import { ProfilFriendsComponent } from './table-profil/profil-friends/profil-friends.component';
import { PersonnageMainComponent } from './table-personnage/personnage-main/personnage-main.component';
import { PersonnageMenuComponent } from './table-personnage/personnage-menu/personnage-menu.component';
import { PersonnageCreateComponent } from './table-personnage/personnage-create/personnage-create.component';



@NgModule({
  declarations: [TableJeuComponent, TableChatComponent, TableProfilComponent, TablePersonnageComponent, TableAventureComponent, TableDonjonComponent, TableTutoComponent, TableHeadComponent, ProfilStatsComponent, ProfilInfosComponent, ProfilFriendsComponent, PersonnageMainComponent, PersonnageMenuComponent, PersonnageCreateComponent],
  imports: [
    SharedModule
  ]
})
export class TableJeuModule { }
