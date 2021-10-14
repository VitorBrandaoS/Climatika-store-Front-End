import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  postProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://climatika-store-ecommerce.herokuapp.com/climatika/produto', produto, this.token)
  }
  getAllProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('https://climatika-store-ecommerce.herokuapp.com/climatika/produto',this.token)
  }
  atualizarProduto(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>("https://climatika-store-ecommerce.herokuapp.com/climatika/produto", produto, this.token)
  }
  deletarProduto(id: number): Observable<Produto>{
    return this.http.delete<Produto>(`https://climatika-store-ecommerce.herokuapp.com/climatika/produto/${id}`, this.token)
  }
  getByIdProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(`https://climatika-store-ecommerce.herokuapp.com/climatika/produto/${id}`, this.token)
  }
  getByCategoriaMae(nomeCategoria: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://climatika-store-ecommerce.herokuapp.com/climatika/produto/categoria/${nomeCategoria}`, this.token)
  }
  getByCategoriaFilha(nomeSubCategoria: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://climatika-store-ecommerce.herokuapp.com/climatika/produto/categoria/subcategoria/${nomeSubCategoria}`, this.token)
  }

  getByNomeProduto(nome: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`https://climatika-store-ecommerce.herokuapp.com/climatika/produto/busca/nome/${nome}`, this.token)
  }

}
