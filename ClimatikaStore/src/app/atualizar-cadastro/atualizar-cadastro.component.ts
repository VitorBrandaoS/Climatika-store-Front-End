import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrls: ['./atualizar-cadastro.component.css']
})
export class AtualizarCadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(){
    this.findByIdUser(environment.id)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  atualizarUser(){
    if (this.usuario.senha != this.confirmarSenha) {
      alert("As senhas estão incorretas.")
    }else{
      this.usuario.id = environment.id
      this.usuarioService.atualizarUsuario(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp
        alert("Usuario atualizado com sucesso!")
        this.router.navigate(["/entrar"])
      })
    }
  }

  findByIdUser(id: number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
      this.usuario = resp 
    })
  }
  
}
