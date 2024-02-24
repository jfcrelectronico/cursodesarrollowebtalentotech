import { Component, OnInit, Output } from '@angular/core';
import { Cliente } from '../core/interfaces/cliente';
import { RouterLink } from '@angular/router';
import { AgregarclientesComponent } from "../agregarclientes/agregarclientes.component";


@Component({
    selector: 'app-verclientes',
    standalone: true,
    templateUrl: './verclientes.component.html',
    styleUrl: './verclientes.component.css',
    imports: [RouterLink, AgregarclientesComponent]
})
export class VerclientesComponent implements OnInit {



  misclientesForm: Cliente[] = [];



  mostrar:boolean = false;

  ngOnInit(){
    this.misclientesForm.push(
      {
      id : 1,
      nombre: "jony" ,
      direccion: "calle falsa",
      telefono: "12345",
      email: "jfcr@gmail.com",
      tipoDocumento: "cc",
      numeroDocumento: "12345678",
      estado: true,

    },

    {
      id : 2,
      nombre: "fredy" ,
      direccion: "calle falsa",
      telefono: "12345",
      email: "jfcr@gmail.com",
      tipoDocumento: "cc",
      numeroDocumento: "12345678",
      estado: true,

    },

    {
      id : 3,
      nombre: "nata" ,
      direccion: "calle falsa",
      telefono: "12345",
      email: "jfcr@gmail.com",
      tipoDocumento: "cc",
      numeroDocumento: "12345678",
      estado: false,

    }
    
    );
  /*   this.misclientes.forEach((cliente)=>{
      console.log('Mis clientes',cliente);
    }); */
  }
//create method eliminarCliente 

  eliminarCliente(idCliente:number): void{
  
    //filer cliente id//variable deseada is of type Cliente
    //filter all elements of misclients with idcliente different to idcliente and then
    //assigned these to misclientes
    this.misclientesForm=this.misclientesForm.filter((variabledeseada)=>variabledeseada.id!==idCliente);

  }

  //this function is call when generate and $event in the funcion @output define on agregarclientes.component.ts

  actualizarcliente(cliente: Cliente):void
  {
    // the informacion receive for since function @output infoclientenuevo define on agregarclientes.component.ts
    //is of type interface cliente, with this information put this inside of form misclientesForm
    //using methoid push
    this.misclientesForm.push(cliente);
  }

  editarcliente(idclient:Number): void
  {

    //this.misclientes.push(clienteform());
  }

  showagregarclientes()
  {
    this.mostrar = true;

  }

  }



