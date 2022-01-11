import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrousersRoutingModule } from './trousers-routing.module';
import { TrousersComponent } from './list/trousers.component';


@NgModule({
  declarations: [TrousersComponent],
  imports: [
    CommonModule,
    TrousersRoutingModule,
  ], exports: [TrousersComponent]
})
export class TrousersModule { }
