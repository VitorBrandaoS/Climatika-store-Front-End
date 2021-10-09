import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';

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
    return this.http.post<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/add`, statusVenda, this.token)
  }

  adicionarItem(idVenda: number, idProduto: number): Observable<StatusVenda>{
    return this.http.post<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/add/produto/${idVenda}/${idProduto}`, this.token)
  }

  getByIdVenda(id: number): Observable<StatusVenda> {
    return this.http.get<StatusVenda>(`https://climatika-store-ecommerce.herokuapp.com/climatika/status/${id}`, this.token)
  }

}
