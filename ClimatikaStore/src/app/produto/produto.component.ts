
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  user: Usuario = new Usuario
  produto: Produto = new Produto()
  statusVenda: StatusVenda = new StatusVenda()
  idProduto: number
  idUser: number = environment.id
  idVenda: number = environment.id
  

  
  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
    private router: Router,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {  
    window.scroll(0,0)
    this.idProduto = this.route.snapshot.params['codigo']
    this.findProdutoById(this.idProduto)    
    this.findUserById()
  }



  findUserById() {
    this.usuarioService.getByIdUsuario(this.idUser).subscribe((resp: Usuario) => {
      this.user = resp
    })
  }


  findProdutoById(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }

  addProduto(){
    if (this.idUser == 0) {
      alert("Por favor faça o login antes de adicionar um produto.")
      this.router.navigate(["/entrar"])
    }
    this.carrinhoService.adicionarItem(this.idProduto, this.idVenda).subscribe(() =>{
      alert("Produto adicionado ao carrinho com sucesso!")
      this.router.navigate(["/carrinho"])
    })
  }

  /*
  openStatusVenda(){
    if (this.statusVenda.status == 'finalizado') {
      this.idVenda = this.statusVenda.id
      this.statusVenda.status = "aberto"
      this.carrinhoService.criarStatusVenda(this.statusVenda).subscribe((resp: StatusVenda) => {        
        this.statusVenda = resp
        this.addProduto()
        alert("Pedido adicionado ao carrinho com sucesso!")
        this.router.navigate(["/carrinho"])
      })
    }else{
      this.idVenda = this.statusVenda.id 
      this.carrinhoService.criarStatusVenda(this.statusVenda).subscribe((resp: StatusVenda) => {               
        this.statusVenda = resp
        this.addProduto()
        alert("Item adicionado ao carrinho com sucesso! 😊")
        this.router.navigate(["/carrinho"])
      })
    }    
  }*/

  
}
