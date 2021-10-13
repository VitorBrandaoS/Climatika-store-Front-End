import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/login', usuarioLogin)

  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://climatika-store-ecommerce.herokuapp.com/climatika/usuario/cadastrar', usuario)

  }

  logado() {
    let ok = false
    if(environment.token != ''){
      ok = true
    }
    return ok
  }
  // comum
  // admin
  logadoAdmin() {
    let ok = false
    if(environment.token != '' && environment.tipoUsuario == 'adm'){
      ok = true
    }
    return ok
  }

}
