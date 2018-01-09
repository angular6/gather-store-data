import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddDsuComponent } from './pages/add-dsu/add-dsu.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDsuComponent,
    AddSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
