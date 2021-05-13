import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UserLogin } from '../model/UserLogin';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server = environment.server

  token = localStorage.getItem('token')

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>(`${this.server}/usuarios/logar`, userLogin)
  }
  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.server}/usuarios/cadastrar`, usuario)
  }
  
  logado(){
    let ok: boolean = false
    
    if(this.token != null){
      ok = true;
    }
    return ok
  }

  credenciais(){
    let rota = this.route.url
    let ok: boolean = true
    if(rota == '/entrar' || rota == '/cadastrar'){
      ok = false
    }
    return ok
  }

  adm(){
    let ok: boolean = false

    if(environment.tipo == "adm"){
      ok = true;
    }
    return ok
  }

  categoriasOn(){
    let ok: boolean = false
    let rota = this.route.url
    if(rota.indexOf('categoria-produtos') == -1){
      ok = true
    }
    return ok
  }
}