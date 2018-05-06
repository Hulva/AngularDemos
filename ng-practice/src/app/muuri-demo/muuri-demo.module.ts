import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuuriDemoRoutingModule } from './muuri-demo-routing.module';
import { GridComponent } from './grid/grid.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MuuriDemoRoutingModule
  ],
  declarations: [GridComponent]
})
export class MuuriDemoModule { }
