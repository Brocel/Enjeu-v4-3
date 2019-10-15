import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableJeuComponent } from './table-jeu/table-jeu.component';
import { TableProfilComponent } from './table-profil/table-profil.component';
import { TablePersonnageComponent } from './table-personnage/table-personnage.component';
import { TableAventureComponent } from './table-aventure/table-aventure.component';
import { TableDonjonComponent } from './table-donjon/table-donjon.component';
import { TableTutoComponent } from './table-tuto/table-tuto.component';
import { ProfilStatsComponent } from './table-profil/profil-stats/profil-stats.component';
import { ProfilInfosComponent } from './table-profil/profil-infos/profil-infos.component';
import { ProfilFriendsComponent } from './table-profil/profil-friends/profil-friends.component';
import { PersonnageMainComponent } from './table-personnage/personnage-main/personnage-main.component';
import { PersonnageMenuComponent } from './table-personnage/personnage-menu/personnage-menu.component';
import { PersonnageCreateComponent } from './table-personnage/personnage-create/personnage-create.component';
import { TableAffichageComponent } from './table-affichage/table-affichage.component';
import { AffichageChatComponent } from './table-affichage/affichage-chat/affichage-chat.component';
import { AffichageCreateComponent } from './table-affichage/affichage-create/affichage-create.component';
import { AffichageDetailsComponent } from './table-affichage/affichage-details/affichage-details.component';
import { AffichageGameComponent } from './table-affichage/affichage-game/affichage-game.component';


@NgModule({
  declarations: [TableJeuComponent, TableProfilComponent, TablePersonnageComponent, TableAventureComponent, TableDonjonComponent, TableTutoComponent, ProfilStatsComponent, ProfilInfosComponent, ProfilFriendsComponent, PersonnageMainComponent, PersonnageMenuComponent, PersonnageCreateComponent, TableAffichageComponent, AffichageChatComponent, AffichageCreateComponent, AffichageDetailsComponent, AffichageGameComponent],
  imports: [
    SharedModule
  ]
})
export class TableJeuModule { }
