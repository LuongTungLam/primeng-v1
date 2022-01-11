import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';


@NgModule({
  imports: [HomeRoutingModule, CommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
