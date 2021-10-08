import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AtualizandoProdutoComponent } from './editar/atualizando-produto/atualizando-produto.component';
import { DeletandoProdutoComponent } from './editar/deletando-produto/deletando-produto.component';
import { EditProdutoComponent } from './editar/edit-produto/edit-produto.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {path:'', redirectTo: 'inicio', pathMatch: 'full'},

{path:'entrar', component: EntrarComponent},
{path:'cadastrar', component: CadastrarComponent},
{path: 'inicio', component:InicioComponent},
{path: 'carrinho', component:CarrinhoComponent},
{path: 'cadastrar-produto', component:CadastrarProdutoComponent},
{path: 'editar-produto', component: EditProdutoComponent},
{path: 'atualizando-produto/:id', component: AtualizandoProdutoComponent},
{path: 'deletando-produto/:id', component: DeletandoProdutoComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
