import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';

const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateTaskComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
