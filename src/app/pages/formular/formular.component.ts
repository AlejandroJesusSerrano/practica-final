import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss'],
})
export class FormularComponent {

  passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/; 

  nameControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]);
  
  passwordControl = new FormControl(
    '',  
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern(this.passwordPattern)
    ]
  )

  formRegister = new FormGroup({
    name: this.nameControl,
    password: this.passwordControl,
  });

  public hide: boolean = true;

}
