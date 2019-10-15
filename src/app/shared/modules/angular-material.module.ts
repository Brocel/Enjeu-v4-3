import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [MatTabsModule, MatTableModule, MatCardModule, MatDividerModule, MatButtonModule],
    exports: [MatTabsModule, MatTableModule, MatCardModule, MatDividerModule, MatButtonModule]
})

export class AngularMaterialModule { }
