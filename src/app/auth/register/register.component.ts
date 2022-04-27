import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  public forma!: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit() {

    this.forma = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  crearUsuario() {
    console.log(this.forma.invalid);
    
    console.log(this.forma.value);
    
  }

}
