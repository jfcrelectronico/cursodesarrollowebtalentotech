import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cliente } from '../core/interfaces/cliente';

@Component({
  selector: 'app-agregarclientes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregarclientes.component.html',
  styleUrl: './agregarclientes.component.css'
})
export class AgregarclientesComponent {


  //model agregarclientes sent information to model verclientes
  // then use @output() nombredeseadofuncion : EventEmitter<tipodatoaregresar> = new EventEmitter <tipodatoaregresar>();
  @Output() infoclientenuevo : EventEmitter<Cliente> = new EventEmitter<Cliente>();
  
  //rules for form agregarclientes
  clienteForm = new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    direccion: new FormControl('',[Validators.required]),
    telefono:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.email,Validators.required]),
    tipoDocumento: new FormControl('',[Validators.required]),
    numeroDocumento:new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required]),

  });
// create function that will call modal agregarcliente when push button Guardar
crearcliente(){
    //for sent information use emit method, this method is part of output funcion create before
    //how infoclientenuevo is of type interface cliente this have differents attributes stablish for interface 
    // then assigned attribuit for name and type for example 
    // name attribut is id
    // type of this Number
    // value for this element
    //this.clienteForm.value.id -> value inside of form in the space id of clienteForm 
    //developt in file agregarclientes.html

    this.infoclientenuevo.emit(
      
      {id: Number(this.clienteForm.value.id),
      nombre: String(this.clienteForm.value.nombre),
      direccion: String(this.clienteForm.value.direccion),
      telefono: String(this.clienteForm.value.telefono),
      email:String(this.clienteForm.value.email),
      tipoDocumento:String(this.clienteForm.value.tipoDocumento),
      numeroDocumento:String(this.clienteForm.value.numeroDocumento),
      estado:Boolean(this.clienteForm.value.estado)}
      
      );
        //after push button and sent this clear form
      this.clienteForm.reset();
}

}

