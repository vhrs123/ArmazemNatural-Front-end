import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  server = environment.server

  constructor(private http: HttpClient) 
  { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token') || '')
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.server}/categoria`, this.token)
  }

  getByIdCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.server}/categoria/${id}`,  this.token)
  }

  getByCategoriaProdutos(nome: string):Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.server}/categoria/nome/${nome}`, this.token) 
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.server}/categoria`, categoria, this.token)

  }
  
  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.server}/categoria`, categoria, this.token)
  }

  deleteCategoria(id: number){
    return this.http.delete<Categoria>(`${this.server}/categoria/${id}`,  this.token)
  }
}
