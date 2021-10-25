import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {


  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  criarStatusVenda(statusVenda: StatusVenda): Observable<StatusVenda>{
    return this.http.post<StatusVenda>("https://climatika-store-ecommerce.herokuapp.com/climatika/status/add",statusVenda)
  }

  adicionarItem(idProduto: number, idVenda: number): Observable<StatusVenda>{
    return this.http.post<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/add/produto/${idProduto}/${idVenda}`, this.token)
  }

  removerItem(idProduto: number, idVenda: number): Observable<StatusVenda>{
    return this.http.post<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/remove/produto/${idProduto}/${idVenda}`, this.token)
  }

  getByIdVenda(id: number): Observable<StatusVenda> {
    return this.http.get<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/${id}`, this.token)
  }

  limparLista(id: number): Observable<StatusVenda> {
    return this.http.post<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/limpa-carrinho/${id}`, this.token)
  }

  calculoTotal(id: number): Observable<number> {
    return this.http.post<number>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/calculo-total/${id}`, this.token)
  }


}
