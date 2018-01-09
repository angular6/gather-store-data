import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDsuComponent } from './pages/add-dsu/add-dsu.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'add-dsu', component: AddDsuComponent },
  { path: 'add-site', component: AddSiteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
