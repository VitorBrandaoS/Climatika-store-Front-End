import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-atualizando-produto',
  templateUrl: './atualizando-produto.component.html',
  styleUrls: ['./atualizando-produto.component.css']
})
export class AtualizandoProdutoComponent implements OnInit {
  produto: Produto = new Produto()
  listaProdutos: Produto[]
  codigoProduto: number
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.codigoProduto = this.route.snapshot.params["id"]
    this.findByIdProduto(this.codigoProduto)
  }
  atualizar(){
    this.produto.codigo = this.codigoProduto

    this.produtoService.atualizarProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      alert("Produto atualizado com sucesso!")
      this.router.navigate(["/editar-produto"])
    })
  }
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 
    })
  }
}
