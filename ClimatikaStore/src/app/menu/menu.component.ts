import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';
import { AuthService } from '../service/auth.service';
import { createPopper } from '@popperjs/core';
import { CarrinhoService } from '../service/carrinho.service';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  idCarrinho: number
  
  valorTotal: number = 0
  statusVenda: StatusVenda = new StatusVenda()
  usuario: Usuario = new Usuario()


  constructor(
    public auth : AuthService,
    private carrinhoService: CarrinhoService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {  }

  ngOnInit() {
    
    this.idCarrinho = environment.id
    this.statusVenda.idUsuario = this.usuario   
    
  }

  findUserById(){
    this.usuarioService.getByIdUsuario(environment.id).subscribe((resp: Usuario) =>{
      this.usuario = resp      
    })
    this.statusVenda.idUsuario = this.usuario
    console.log("Get User")
    console.log(this.usuario.id)
    console.log(this.usuario.nomeCompleto)
    console.log(this.usuario.email)
    console.log(this.usuario.senha)
    console.log(this.usuario.tipoUsuario)
    console.log(this.usuario.celular)
    console.log(this.usuario.cidade)
    console.log(this.usuario.estado)
  }

  openStatusVenda(statusVenda: StatusVenda){ 
    this.findUserById()
      this.carrinhoService.criarStatusVenda(statusVenda).subscribe((resp: StatusVenda) => {
        this.statusVenda = resp
      })      
  }


  sair() {
    environment.id = 0
    environment.tipoUsuario = ""
    environment.token = ""
    environment.nomeCompleto = "" 
    this.router.navigate(["/entrar"])
  }

  
  console(){
    console.log(this.usuario.id)
    console.log(this.usuario.nomeCompleto)
    console.log(this.usuario.email)
    console.log(this.usuario.senha)
    console.log(this.usuario.tipoUsuario)
    console.log(this.usuario.celular)
    console.log(this.usuario.cidade)
    console.log(this.usuario.estado)
    console.log("StatusVENDA")
    console.log(this.statusVenda.id)
    console.log(this.statusVenda.idUsuario)
    console.log(this.statusVenda.listaProduto)
    console.log(this.statusVenda.status)
  }

  

}
