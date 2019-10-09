import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';

import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PersonnagesService } from './services/personnages.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardTabDirective } from './directives/card-tab.directive';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, CardTabDirective],
  imports: [
    CommonModule,
    PublicModule,
    ProtectedModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    NavbarComponent,
    FooterComponent,
    CardTabDirective

  ],
  providers: [
    AuthService,
    AuthGuardService,
    PersonnagesService
  ]
})
export class CoreModule {
  //Importer le core uniquement dans app.module
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   if (parentModule) {
    throw new Error('CoreModule is already loaded.');
   }
  }
}
