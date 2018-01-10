import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDsuComponent } from './pages/add-dsu/add-dsu.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import {CanDeactivateGuard} from './shared/guards/can-deactivate-guard.service';


const routes: Routes = [
  { path: '', component: WelcomeComponent, data:{title:"Welcome"} },
  { path: 'add-dsu', component: AddDsuComponent, data: {title: "Add DSU"}, canDeactivate: [CanDeactivateGuard] },
  { path: 'add-site', component: AddSiteComponent, data: {title: "Add Site"}, canDeactivate: [CanDeactivateGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
