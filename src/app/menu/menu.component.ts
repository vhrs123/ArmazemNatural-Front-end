import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome

  listaCategorias: Categoria[]



  constructor(
    private router: Router,
    public authService: AuthService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit( ) {
    this.findAllCategorias()
  }

  sair() {
    this.router.navigate(["/home"])
    //environment.token = ''
    environment.nome = ""
    environment.email = ""
    environment.id = 0

    localStorage.removeItem('token')
  }

  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

}