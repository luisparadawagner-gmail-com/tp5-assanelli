import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from '../consultar-persona/consultar-persona.component';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  @Input() crearPersona : any;
  
  itemForm: FormGroup;
  persona: Persona;
  param: any;

  showConsultarPersona: Boolean= false;
  showCrearPersona: Boolean = true;

  constructor(private fb: FormBuilder, private router: ActivatedRoute) {}

  

  ngOnInit(): void {
      this.param = this.router.snapshot.params;

      if(Object.keys(this.param).length){
        this.persona = this.param
      }else{
        this.persona = this.param;
      }

    this.initForm(this.persona);
  }

  initForm(item: Persona){
    this.itemForm = this.fb.group({
      nombre: [item.nombre ? item.nombre : ''],
      apellido:[item.apellido ? item.apellido : ''],
      edad: [item.edad ? item.edad : ''],
      domicilio: [item.domicilio ? item.domicilio : '']
    })
  }
  submit(){
      this.crearPersona = this.itemForm.value;
      this.showConsultarPersona = true;

      this.showCrearPersona = false;
      
  }

}