import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { AuthService } from '../service/auth.service';
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
    private produtoService: ProdutoService,
    private auth: AuthService
  ) { }

  ngOnInit(){
  
    if(this.auth.logadoAdmin() == false){
      alert('Você não tem permissão para acessar esta página!')
      this.router.navigate(['/inicio'])
    }
    this.produto.foto = "https://i.imgur.com/e0rnUdR.png"
  }
  
  identificador(){
    let categ = ""
    if (this.produto.categoriaMae == "Cozinha") {
      categ = "Cozinha"
    }else if(this.produto.categoriaMae == "Banheiro"){
      categ = "Banheiro"
    }else if(this.produto.categoriaMae == "Jardim"){
      categ = "Jardim"
    }else if(this.produto.categoriaMae == "Moda e Beleza"){
      categ = "Moda e Beleza"
    }else if(this.produto.categoriaMae == "Higiene Pessoal"){
      categ = "Higiene Pessoal"
    }else if(this.produto.categoriaMae == "Pet"){
      categ = "Pet"
    }
    return categ
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
