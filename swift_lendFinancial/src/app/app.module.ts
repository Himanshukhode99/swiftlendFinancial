import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './entry/home-dashboard/home-dashboard.component';
import { HomeHeaderComponent } from './templates/home-header/home-header.component';
import { HomeFooterComponent } from './templates/home-footer/home-footer.component';
import { AppHeaterComponent } from './templates/app-heater/app-heater.component';
import { MenuComponent } from './templates/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    AppHeaterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
