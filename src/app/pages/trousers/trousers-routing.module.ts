import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrousersComponent } from './list/trousers.component';

const routes: Routes = [
  { path: '', component: TrousersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrousersRoutingModule { }
