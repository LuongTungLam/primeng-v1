import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShirtRoutingModule } from './shirt-routing.module';
import { ShirtComponent } from './list/shirt.component';


@NgModule({
  imports: [
    CommonModule,
    ShirtRoutingModule,
  ],
  declarations: [ShirtComponent],
})
export class ShirtModule { }
