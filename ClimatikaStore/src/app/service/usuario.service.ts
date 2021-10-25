import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/${id}`, this.token)
  }

  atualizarUsuario(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>("https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/atualizar", user , this.token)
  }

  atualizarSenha(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>("https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/atualizar/senha", user , this.token)
  }

  atualizarEmail(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>("https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/atualizar/email", user , this.token)
  }

}
