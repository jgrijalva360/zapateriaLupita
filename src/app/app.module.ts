import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormasPagoComponent } from './components/formas-pago/formas-pago.component';
import { WhatsAppComponent } from './components/whatsapp/whatsapp.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ConstruccionComponent,
    HomeComponent,
    HeaderComponent,
    CarruselComponent,
    NosotrosComponent,
    MarcasComponent,
    ContactoComponent,
    FooterComponent,
    FormasPagoComponent,
    WhatsAppComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
