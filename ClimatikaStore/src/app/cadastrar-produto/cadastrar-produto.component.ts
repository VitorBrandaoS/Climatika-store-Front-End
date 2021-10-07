import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: Produto = new Produto()

  constructor(
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      alert('Você não tem permissão para acessar esta página!')
      this.router.navigate(['/inicio'])
    }
  }

  cadastrarProduto(){
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
      console.log(Produto)
      alert('Produto cadastrado!')
      this.produto = new Produto()
      

    })
  }

}
