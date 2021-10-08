import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudeComponent } from './ajude/ajude.component';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { NossosParceirosComponent } from './nossos-parceiros/nossos-parceiros.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { ProdutoComponent } from './produto/produto.component';


const routes: Routes = [

  {path:'', redirectTo: 'inicio', pathMatch: 'full'},

{path:'entrar', component: EntrarComponent},
{path:'cadastrar', component: CadastrarComponent},
{path: 'inicio', component:InicioComponent},
{path: 'carrinho', component:CarrinhoComponent},
{path: 'cadastrar-produto', component:CadastrarProdutoComponent},
{path: 'sobre', component:SobreComponent},
{path: 'nossos-parceiros', component:NossosParceirosComponent},
{path: 'ajude', component: AjudeComponent},
{path: 'duvidas', component: DuvidasComponent},
{path: 'produto', component: ProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
