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



@NgModule({
  declarations: [TableJeuComponent, TableChatComponent, TableProfilComponent, TablePersonnageComponent, TableAventureComponent, TableDonjonComponent, TableTutoComponent, TableHeadComponent],
  imports: [
    SharedModule
  ]
})
export class TableJeuModule { }
