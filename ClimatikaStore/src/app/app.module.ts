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
<<<<<<< HEAD
import { CarrinhoComponent } from './carrinho/carrinho.component';
=======
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
>>>>>>> 4215c2c0b16979024df05071a5786d4402eca108


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
<<<<<<< HEAD
    CarrinhoComponent
=======
    CadastrarProdutoComponent
>>>>>>> 4215c2c0b16979024df05071a5786d4402eca108
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
