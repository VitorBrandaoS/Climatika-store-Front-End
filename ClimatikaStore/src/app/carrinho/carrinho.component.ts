import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})

export class CarrinhoComponent implements OnInit {
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  codigoProduto: number
  idVenda: number
  usuario: Usuario = new Usuario()
  statusVenda: StatusVenda = new StatusVenda()
  valorTotal: number = 0

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService,
    private usuarioService: UsuarioService,
    public auth: AuthService
  ) {   }

  ngOnInit() {
   if (environment.id == 0) {
      alert("Opá! Você precisa logar para acessar seu carrinho de compras...")
      this.router.navigate(["/inicio"])
    }
    this.auth.findByIdVenda()
    this.auth.total()
  }
  
  
  findByIdProduto(id: number){    
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 
    })
  }

  

}
