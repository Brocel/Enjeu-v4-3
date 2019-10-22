import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AffCompCenterService } from './services/aff-comp-center.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule, //préparation de la factorisation du CommonModule
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [ AffCompCenterService ]
      };
    }
}
