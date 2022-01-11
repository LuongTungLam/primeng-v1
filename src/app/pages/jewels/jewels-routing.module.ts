import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JewelsComponent } from './list/jewels.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: JewelsComponent },
  { path: '/add', component: AddComponent },
  { path: '/edit', component: EditComponent },
  { path: '/view', component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JewelsRoutingModule { }
