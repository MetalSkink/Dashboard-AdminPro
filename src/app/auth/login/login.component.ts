import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LoginUsuario } from '../models/LoginUsuario';
import Swal from 'sweetalert2';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router:Router,
              private tokenService: TokenService,
              private authService: AuthService) { }

  loginUsuario!: LoginUsuario;
  isLogged: boolean = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
    if (this.isLogged===true){
      this.router.navigate(['/dashboard']);
    }
  }

  miFormulario: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });

  campoValido(campo: string){
    return this.miFormulario.controls[campo].valid &&
           this.miFormulario.controls[campo].touched;
  }

  campoNoValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  login(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    const {email, password} = this.miFormulario.value;
    this.loginUsuario = new LoginUsuario(email, password);
    this.authService.login(this.loginUsuario)
      .subscribe({
        next: (data) => {
          const {token, name} = data;
          console.log(data);
          this.tokenService.setToken(token);
          this.tokenService.setUserName(name);
          this.tokenService.setAuthorities(data.roles);
          this.router.navigate(["/dashboard"]);
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Credenciales incorrectas'
          })
        }
      });
    }
}
