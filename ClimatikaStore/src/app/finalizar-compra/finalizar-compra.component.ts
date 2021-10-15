import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css']
})
export class FinalizarCompraComponent implements OnInit {

  usuario: Usuario = new Usuario

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.findUserById()
  }

  findUserById(){
    this.usuarioService.getByIdUsuario(environment.id).subscribe((resp: Usuario) =>{
      this.usuario = resp
    })

  }

  /*
  findByCategoriaFilha(nome: string){  
    this.produtoService.getByCategoriaFilha(nome).subscribe((resp: Produto[]) =>{
      this.listaProduto = resp
    })
}
*/

}
