import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablas',
  standalone: true,
  imports: [],
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.css'
})
export class TablasComponent {
  //Anghular decorator
  //leave received parameteres 
    @Input() usuarios : {id: number | string; name : string}[] = [];
    @Input() tituloTabla : string = '';

}
