import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { XuLySuCoComponent } from './xu-ly-su-co/xu-ly-su-co.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'XuLySuCo', component: XuLySuCoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
