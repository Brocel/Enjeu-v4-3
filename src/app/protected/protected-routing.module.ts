/*Modules*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*Services*/
import { AuthGuardService } from '../core/services/auth-guard.service';
/*Composants*/
import { TableJeuComponent } from './table-jeu/table-jeu/table-jeu.component';
/*Left*/
import { TableLeftComponent } from './table-jeu/table-left/table-left/table-left.component';
import { LeftFeatureComponent } from './table-jeu/table-left/left-feature/left-feature.component';
import { LeftElementComponent } from './table-jeu/table-left/left-element/left-element.component';
/*Center*/
import { TableCenterComponent } from './table-jeu/table-center/table-center/table-center.component';
import { TableHeadComponent } from './table-jeu/table-center/table-head/table-head.component';
import { TableAffichageComponent } from './table-jeu/table-center/table-affichage/table-affichage/table-affichage.component';
/*Right*/
import { TableRightComponent } from './table-jeu/table-right/table-right/table-right.component';
import { RightFeatureComponent } from './table-jeu/table-right/right-feature/right-feature.component';
import { RightElementComponent } from './table-jeu/table-right/right-element/right-element.component';

const routes: Routes = [
  { path: 'protected/table-jeu', canActivate: [AuthGuardService], component: TableJeuComponent }, // on fait correspondre la route tablejeu au composant table-jeu
  //routes de Left :
  { path: 'protected/table-jeu/table-left', canActivate: [AuthGuardService], component: TableLeftComponent },
  { path: 'protected/table-jeu/table-left/left-feature', canActivate: [AuthGuardService], component: LeftFeatureComponent },
  { path: 'protected/table-jeu/table-left/left-element', canActivate: [AuthGuardService], component: LeftElementComponent },
  //routes de Center :
  { path: 'protected/table-jeu/table-center', canActivate: [AuthGuardService], component: TableCenterComponent },
  { path: 'protected/table-jeu/table-center/table-head', canActivate: [AuthGuardService], component: TableHeadComponent },
  { path: 'protected/table-jeu/table-center/table-affichage', canActivate: [AuthGuardService], component: TableAffichageComponent },
  //routes de Right :
  { path: 'protected/table-jeu/table-right', canActivate: [AuthGuardService], component: TableRightComponent },
  { path: 'protected/table-jeu/table-right/right-feature', canActivate: [AuthGuardService], component: RightFeatureComponent },
  { path: 'protected/table-jeu/table-right/right-element', canActivate: [AuthGuardService], component: RightElementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
