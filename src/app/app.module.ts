import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ConsultarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
