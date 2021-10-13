import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
 usuarioLogin: UsuarioLogin = new UsuarioLogin()
  constructor(
    private auth: AuthService,
    private router: Router
  ){ }

  ngOnInit() {
    window.scroll(0,0)
  }

  Entrar(){
  this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp
      environment.token = this.usuarioLogin.token
      environment.nomeCompleto = this.usuarioLogin.nomeCompleto
      environment.id = this.usuarioLogin.id
      environment.tipoUsuario = this.usuarioLogin.tipoUsuario

      console.log(environment.token)

      console.log(environment.nomeCompleto)

      console.log(environment.id)

      console.log(environment.tipoUsuario)

      this.router.navigate(['/inicio'])
  },erro =>{
    if(erro.status == 500){
      alert('Usuario ou senha estão incorretos !')
    }
  })

  }

}
