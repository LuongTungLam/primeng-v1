import { NgModule } from '@angular/core';

import { ShoeRoutingModule } from './shoe-routing.module';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService, MessageService } from "primeng/api";
import { ToastModule } from "primeng/toast";

@NgModule({
  imports: [
    ShoeRoutingModule, CommonModule, TableModule, BadgeModule, InputTextModule, ButtonModule, ConfirmPopupModule, ToastModule
  ],
  declarations: [ListComponent, AddComponent, ViewComponent, EditComponent],
  exports: [ListComponent, AddComponent, ViewComponent, EditComponent],
  providers: [ConfirmationService, MessageService]
})
export class ShoeModule { }
