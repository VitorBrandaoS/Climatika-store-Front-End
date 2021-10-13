import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  idVenda: number
  statusVenda: StatusVenda = new StatusVenda()

  constructor(
    private authService: AuthService,
    private router: Router,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  openStatusVenda(){
    this.statusVenda.idUsuario = this.usuario
    this.carrinhoService.criarStatusVenda(this.statusVenda).subscribe((resp: StatusVenda) => {      
      this.statusVenda = resp
    })   
  }

  cadastrar() {
    if (this.usuario.senha != this.confirmarSenha) {
      alert("As senhas estão incorretas.")
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.openStatusVenda()
        this.router.navigate(["/entrar"])
        alert("Usuário cadastrado com sucesso!")
      })
      
    }

  }
}
