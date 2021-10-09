import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { StatusVenda } from '../model/StatusVenda';
import { CarrinhoService } from '../service/carrinho.service';
import { ProdutoService } from '../service/produto.service';

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

  statusVenda: StatusVenda = new StatusVenda()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.codigoProduto = this.route.snapshot.params["idProduto"]
    this.idVenda = this.route.snapshot.params["idVenda"]
    this.findByIdProduto(this.codigoProduto)
  }

  addProduto(){
    this.carrinhoService.adicionarItem(this.idVenda, this.codigoProduto).subscribe(() =>{
      alert("Produto adicionado ao carrinho com sucesso!")
      this.router.navigate(["/inicio"])
    })
  }
  
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 
    })
  }
}
