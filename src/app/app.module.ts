import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddDsuComponent } from './pages/add-dsu/add-dsu.component';
import { AddSiteComponent } from './pages/add-site/add-site.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { FormComponent } from './shared/form/form.component';
import { ApiService } from './api.service';

import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    AddDsuComponent,
    AddSiteComponent,
    WelcomeComponent,
    FooterComponent,
    NavigationComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
