import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/Produto';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-edit-produto',
  templateUrl: './edit-produto.component.html',
  styleUrls: ['./edit-produto.component.css']
})
export class EditProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProduto: Produto[]
  constructor(
    private produtoService: ProdutoService,
    public auth: AuthService
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

}

