import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  

  constructor(
    private produtoService: ProdutoService,
    public auth: AuthService,
    private carrinhoService: CarrinhoService,
    private usuarioService: UsuarioService
  ){ }

  ngOnInit(){
  window.scroll(0,0)
  this.auth.getAllProdutos()      

  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProduto = resp
    })
  }

/*
  findUserById(id: number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })
  }
*/
/*
  openStatusVenda(){
    if(environment.id == 0){
      console.log("Não existe Usuario Logado!")
    }else{
      this.findUserById(environment.id)
    }
    if(this.usuario.userStatusVenda == null){
      console.log("Iniciando Carrinho!")      
      this.statusVenda.idUsuario = this.usuario
      console.log(this.usuario)
      console.log(this.statusVenda)
      this.criarStatusVenda(this.statusVenda).subscribe((resp: StatusVenda) => {
        this.statusVenda = resp
        return this.statusVenda
      })
    }else{
      console.log("Carrinho existente!")  
    }
  }
*/

}
