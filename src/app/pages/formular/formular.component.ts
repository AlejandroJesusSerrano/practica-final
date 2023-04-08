import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent {

  nameControl = new FormControl('', [Validators.required]);

  formRegister = new FormGroup({
    name: this.nameControl,
  });

}
