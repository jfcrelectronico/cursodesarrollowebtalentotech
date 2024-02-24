import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  //use output for sent parameter
  //conteo is a variable of type output taht leave us to sent data of other components
  @Output() conteo : EventEmitter<number> = new EventEmitter<number>();
  contador: number =0;
  incremento(){

    this.contador++;
    this.conteo.emit(this.contador);
    console.log(this.contador);

  }
}

