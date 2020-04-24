import { NgModule } from "@angular/core";
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const modules = [
	MatInputModule,
	MatToolbarModule,
	MatCardModule,
	MatChipsModule,
	MatRippleModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
	MatButtonToggleModule,
	MatTooltipModule,
	MatProgressBarModule,
]

@NgModule({
	imports:[...modules],
	exports: [...modules]
})
export class MaterialModule { }