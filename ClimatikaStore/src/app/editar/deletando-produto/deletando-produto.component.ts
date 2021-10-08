import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-deletando-produto',
  templateUrl: './deletando-produto.component.html',
  styleUrls: ['./deletando-produto.component.css']
})
export class DeletandoProdutoComponent implements OnInit {

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
  apagar(){

    this.produtoService.deletarProduto(this.codigoProduto).subscribe(() =>{
      alert("Produto apagado com sucesso!")
      this.router.navigate(["/editar-produto"])
    })
  }
  findByIdProduto(id: number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) =>{
      this.produto = resp 
    })
  }

}
