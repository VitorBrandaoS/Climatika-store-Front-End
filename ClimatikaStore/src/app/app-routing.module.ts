import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudeComponent } from './ajude/ajude.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NossosParceirosComponent } from './nossos-parceiros/nossos-parceiros.component';

const routes: Routes = [

  {path:'', redirectTo: 'inicio', pathMatch: 'full'},

{path:'entrar', component: EntrarComponent},
{path:'cadastrar', component: CadastrarComponent},
{path: 'inicio', component:InicioComponent},
{path: 'carrinho', component:CarrinhoComponent},
{path: 'cadastrar-produto', component:CadastrarProdutoComponent},

{path: 'nossos-parceiros', component:NossosParceirosComponent},

{path: 'ajude', component: AjudeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
