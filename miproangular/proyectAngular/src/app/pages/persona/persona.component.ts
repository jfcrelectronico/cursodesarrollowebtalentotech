import { Component } from '@angular/core';
import { TablasComponent } from "../../components/tablas/tablas.component";
import { ContadorComponent } from "../../components/contador/contador.component";


@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [TablasComponent, ContadorComponent]
})
export class PersonaComponent {

  titulo: string ="Develop Company";
  edad: number = 1;

  ocultar : boolean = true;
  users: {id: number | string; name : string}[]=[

    {id: 0,name: 'Sarah'},
    {id: 1,name: 'Amy'},
    {id: 2,name: 'Luisa'},
    {id: 3,name: 'Nata'}

  ]; 

  titulo2: string = "Titulo tabla usuarios";

  incremento: number=0;

  recibircontador(valor: number)
  {
    this.incremento= valor;
  }

}
