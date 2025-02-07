import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule,CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginSchema = new FormGroup({
    email: new FormControl(""),
      senha: new FormControl("")
  })
  private _snackBar = inject(MatSnackBar);

  constructor(private router: Router,  private formBuilder: FormBuilder){
    this.loginSchema = this.formBuilder.group({
      email: new FormControl("", [Validators.required]),
      senha: new FormControl("", [Validators.required])
    })
  }


  onSubmit(){
    if(this.loginSchema.controls.email.value !== '' && this.loginSchema.controls.senha.value !== ''){
      this._snackBar.open("Login feito com sucesso.", "Fechar");
      this.router.navigate(['/home']);
    } else{
      this._snackBar.open("E-mail ou senha inválida.", "Fechar");
    }
  }
}
