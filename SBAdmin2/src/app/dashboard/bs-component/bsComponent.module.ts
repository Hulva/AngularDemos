import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Ng2BootstrapModule } from 'ng2-bootstrap';


import { BSComponentComponent } from './bsComponent.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [BSComponentComponent],
  exports: [BSComponentComponent]
})

export class BSComponentModule { }
