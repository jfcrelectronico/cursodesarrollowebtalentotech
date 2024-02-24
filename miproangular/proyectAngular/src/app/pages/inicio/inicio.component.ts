import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

//when you need some functionality that chargue when page start then use OnInit
export class InicioComponent implements OnInit{
  
  nombre : string ="";
  empresa : string = "";
  ngOnInit(): void {

    this.nombre ="Iothix"
    this.empresa ="Bionnix"
    
  }
  

  mostrarModal(): void{

    Swal.fire({
      icon: "error",
      title: this.nombre,
      //for interpolate variable you need to use ``dont use '' or ""
      text:  `Nuestra empresa: ${this.empresa}!`,
      footer: '<a href="#">Why do I have this issue?</a>'
    });

  }
}
