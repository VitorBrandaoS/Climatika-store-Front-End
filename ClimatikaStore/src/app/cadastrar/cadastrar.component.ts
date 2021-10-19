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
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {        
        this.usuario = resp
      })
      console.log(this.usuario.id)
      console.log(this.usuario.nomeCompleto)
      console.log(this.usuario.email)
      console.log(this.usuario.senha)
      console.log(this.usuario.tipoUsuario)
      console.log(this.usuario.celular)
      console.log(this.usuario.cidade)
      console.log(this.usuario.estado)
      alert("Usuario cadastrado com sucesso!")
      this.router.navigate(["/entrar"])
    }
  }

}
