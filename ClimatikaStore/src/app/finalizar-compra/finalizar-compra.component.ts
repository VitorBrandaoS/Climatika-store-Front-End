import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  usuario: Usuario = new Usuario

  constructor(
    private usuarioService: UsuarioService,
    public auth: AuthService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.findUserById()
    this.auth.findByIdVenda()
  }

  findUserById(){
    this.usuarioService.getByIdUsuario(environment.id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
  }

  limpar(){
    this.carrinhoService.limparLista(environment.id).subscribe((resp: StatusVenda) => {
      this.auth.statusVenda = resp
    })
  }

  

}
