import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import ReactiveFormsModule this leave put the requerired inside of ts file and dont over html file
@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  //add variable with component name finally on Form
  //the new formgropu have a group of controls that give the rules each elements of elements of 
  // aboutus.html component for tis case the name for the inputs nombre, email, mensaje
  /* with validators you can order to inputs some specific rules */
    aboutusForm = new FormGroup({
      nombre : new FormControl('',Validators.required),
      email : new FormControl('',[Validators.email,Validators.required]),
      mensaje : new FormControl('Mensaje por defecto'),

    });

    enviarContacto()
    {
     
      console.log("formulario info",this.aboutusForm);
   

    }
}
