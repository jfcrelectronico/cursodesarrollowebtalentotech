/* import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot()
    ]
});



@Component({
  selector: 'modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent {
  validatingForm: FormGroup;

  constructor() {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
  }

  get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }

  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
}
 */