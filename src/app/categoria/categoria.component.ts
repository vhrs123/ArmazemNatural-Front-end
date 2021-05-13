import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]

  token = localStorage.getItem('token')

  constructor(
    private router: Router,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(this.token == null){
      this.router.navigate(['/entrar'])
    }else{
    this.findAllCategoria()
    }
  }

  findAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  cadastrar() {
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria) => {
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria cadastrada com sucesso!')
      
      this.categoria = new Categoria
      this.findAllCategoria()
    })
  }

}
