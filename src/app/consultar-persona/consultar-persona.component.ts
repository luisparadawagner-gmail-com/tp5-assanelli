import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {ConsultarPersonaService} from './../servicios/consultar-persona-service';

export interface Persona {
	nombre: string;
	apellido: string;
  edad: number;
  domicilio : string;
}

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.css']
})
export class ConsultarPersonaComponent implements OnInit {
  @Input() consultarPersona: any;

  personas: Persona[] = [
		{ nombre: 'Diego', apellido: 'Maradona', edad: 59, domicilio: 'Bs As'},
		{ nombre: 'Leo', apellido: 'Messi', edad: 30 , domicilio: 'Barcelona'},
		{ nombre: 'Carlos', apellido: 'Teves', edad: 33 , domicilio: 'Bs. As'}
	];

  displayedColumns: string[] = [ 'nombre', 'apellido', 'edad', 'domicilio', 'editar' ];
  dataSource : any[]= [];

  constructor(private router: Router, private consultarPersonaService: ConsultarPersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }
  getPersonas(){
    this.consultarPersonaService.getPersonas().subscribe((personas) => {

			this.dataSource = personas;
		});
  }

  editar(element){
    this.router.navigate(['/crear-persona', element])

  }

}
