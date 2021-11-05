import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { UsuarioService } from '../service/usuario.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string
  celular: string
  idVenda: number
  statusVenda: StatusVenda = new StatusVenda()

  constructor(
    private authService: AuthService,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  confirmCelular(event: any) {
    this.celular = event.target.value
  }

  openStatusVenda(statusVenda: StatusVenda){
    this.carrinhoService.criarStatusVenda(statusVenda).subscribe((resp: StatusVenda) => {
      this.statusVenda = resp
    })
  }

  findByIdUser(id: number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
      this.usuario = resp
      return this.usuario 
    })
  }

  cadastrar() {
    if (this.usuario.senha != this.confirmarSenha) {
      alert("As senhas estão incorretas.")
    }else if(this.confirmarSenha.length < 5 || this.usuario.senha.length < 5){
      alert("Atenção! Sua senha precisa ter no mínimo 5 caracteres!")
    } else if(this.celular.length != 11){
      alert("São apenas 11 dígitos que aceitamos para o cadastro do seu celular!")
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {        
        this.usuario = resp

        alert("Usuario cadastrado com sucesso!")
          this.router.navigate(["/entrar"])

          console.log(this.usuario.id)
          console.log(this.usuario.nomeCompleto)
          console.log(this.usuario.email)
          console.log(this.usuario.senha)
          console.log(this.usuario.tipoUsuario)
          console.log(this.usuario.celular)
          console.log(this.usuario.cidade)
          console.log(this.usuario.estado)
      },erro =>{
        if(erro.status == 500){
          alert('Algo deu errado! Por favor, confira seus dados e tente novamente.')
        }if(erro.status == 400){
          alert('Algo deu errado! Por favor, confira seus dados e tente novamente.')
        }
      })
    }
  }

}
