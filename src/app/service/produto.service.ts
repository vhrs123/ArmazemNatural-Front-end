import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { CategoriaService } from './categoria.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  server = environment.server

  constructor(private http: HttpClient) { }


token = {
  headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
}

getAllProdutos(): Observable<Produto[]>{
  return this.http.get<Produto[]>(`${this.server}/produtos`, this.token)
}

getByIdProdutos(id: number): Observable<Produto>{
  return this.http.get<Produto>(`${this.server}/produtos/${id}`, this.token)
}

/*  getByCategoriaProdutos(id: number):Observable<Produto[]>{
  return this.http.get<Produto[]>(`${this.server}/produtos/categoria/${id}`)
}  */



postProdutos(produto: Produto): Observable<Produto>{
  return this.http.post<Produto>(`${this.server}/produtos`, produto, this.token)
}

putProdutos(produto: Produto): Observable<Produto>{
  return this.http.put<Produto>(`${this.server}/produtos`, produto, this.token)
}

deleteProdutos(id: number){
  return this.http.delete(`${this.server}/produtos/${id}`, this.token)
}


}
