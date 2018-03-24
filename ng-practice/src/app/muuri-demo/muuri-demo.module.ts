import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuuriDemoRoutingModule } from './muuri-demo-routing.module';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    MuuriDemoRoutingModule
  ],
  declarations: [GridComponent]
})
export class MuuriDemoModule { }
