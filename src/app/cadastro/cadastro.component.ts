import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroSchema = new FormGroup({
    nome: new FormControl(""),
    email: new FormControl(""),
    senha: new FormControl
  })

  private _snackBar = inject(MatSnackBar);


  constructor(private formBuilder: FormBuilder, private router: Router){
    this.cadastroSchema = this.formBuilder.group({
      nome: new FormControl(""),
      email: new FormControl(""),
      senha: new FormControl("")
    })
  }

  onSubimit(){
    this._snackBar.open("Cadastro realizado com sucesso.", "Fechar");
    this.router.navigate(['/login']);
  }
}
