import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from  '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    CommonModule, //préparation de la factorisation du CommonModule
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class SharedModule { }
