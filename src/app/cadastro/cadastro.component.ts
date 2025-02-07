import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule,CommonModule ,ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastroSchema = new FormGroup({
    nome: new FormControl(""),
    email: new FormControl(""),
    senha: new FormControl(""),
    confirmarSenha: new FormControl("")
  })

  private _snackBar = inject(MatSnackBar);

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.cadastroSchema = this.formBuilder.group({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmarSenha: new FormControl('', Validators.required)
    }, { validators: this.senhasIguais });
  }

  senhasIguais(group: AbstractControl): ValidationErrors | null {
    const senha = group.get('senha')?.value;
    const confirmarSenha = group.get('confirmarSenha')?.value;
    return senha === confirmarSenha ? null : { senhasNaoIguais: true };
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    if (this.cadastroSchema.invalid) {
      this._snackBar.open('Preencha todos os campos corretamente.', 'Fechar');
    }

    this._snackBar.open('Cadastro realizado com sucesso.', 'Fechar');
    this.router.navigate(['/login']);
  }

}
