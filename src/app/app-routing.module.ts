import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
const routes: Routes = [
  {path: 'crear-persona', component: CrearPersonaComponent},
  {path: 'consultar-persona', component: ConsultarPersonaComponent},
  { path: '', redirectTo: 'consultar-personas', pathMatch: 'full' },
  { path: '**', component: ConsultarPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
