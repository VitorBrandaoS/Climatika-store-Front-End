import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';

import { CarrinhoComponent } from './carrinho/carrinho.component';

import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { EditProdutoComponent } from './editar/edit-produto/edit-produto.component';
import { AtualizandoProdutoComponent } from './editar/atualizando-produto/atualizando-produto.component';
import { DeletandoProdutoComponent } from './editar/deletando-produto/deletando-produto.component';

import { SobreComponent } from './sobre/sobre.component';

import { NossosParceirosComponent } from './nossos-parceiros/nossos-parceiros.component';

import { AjudeComponent } from './ajude/ajude.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { ProdutoComponent } from './produto/produto.component';
import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    CarrinhoComponent,
    CadastrarProdutoComponent,
    EditProdutoComponent,
    AtualizandoProdutoComponent,
    DeletandoProdutoComponent,
    SobreComponent,
    NossosParceirosComponent,
    AjudeComponent,
    DuvidasComponent,
    ProdutoComponent,
    DuvidasComponent,
    AtualizarCadastroComponent,
    FinalizarCompraComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
