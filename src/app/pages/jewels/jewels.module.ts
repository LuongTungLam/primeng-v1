import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JewelsRoutingModule } from './jewels-routing.module';
import { JewelsComponent } from './list/jewels.component';


@NgModule({
  declarations: [JewelsComponent],
  imports: [
    CommonModule,
    JewelsRoutingModule,
  ],
  exports: [JewelsComponent]
})
export class JewelsModule { }
