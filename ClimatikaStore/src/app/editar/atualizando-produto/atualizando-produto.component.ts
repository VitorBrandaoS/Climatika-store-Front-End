import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/Produto';
import { AuthService } from 'src/app/service/auth.service';
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
    private produtoService: ProdutoService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if(this.auth.logadoAdmin() == false){
      alert('Você não tem permissão para acessar esta página!')
      this.router.navigate(['/inicio'])
    }
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

}
