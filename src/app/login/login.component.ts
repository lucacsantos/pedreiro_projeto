import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginSchema = new FormGroup({
    email: new FormControl(""),
      senha: new FormControl("")
  })

  constructor(private router: Router, private toastr: ToastrService, private formBuilder: FormBuilder){
    this.loginSchema = this.formBuilder.group({
      email: new FormControl(""),
      senha: new FormControl("")
    })
  }


  onSubimit(){
    console.log(this.loginSchema.controls.email.value);
    if(this.loginSchema.controls.email.value !== '' && this.loginSchema.controls.senha.value !== ''){
      this.toastr.success("Loginqqqq");
     // this.router.navigate(['/home']);
    } else{
      alert("erroooooor")
    }
  }
}
