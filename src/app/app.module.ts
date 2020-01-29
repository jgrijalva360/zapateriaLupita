import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, BodyComponent, ConstruccionComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
