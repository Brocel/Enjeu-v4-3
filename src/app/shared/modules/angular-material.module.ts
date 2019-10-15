import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';

@NgModule({
    imports: [MatTabsModule, MatTableModule, MatCardModule, MatDividerModule],
    exports: [MatTabsModule, MatTableModule, MatCardModule, MatDividerModule]
})

export class AngularMaterialModule { }
