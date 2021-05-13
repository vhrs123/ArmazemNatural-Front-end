import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  categoria: Categoria = new Categoria()
  listaCategorias: Categoria[]
  idCategoria: number

  token = localStorage.getItem('token')


  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
    
  ) { }

  ngOnInit() {
    if(this.token == null){
      this.router.navigate(['/entrar'])
    }else{
      this.getAllCategorias()
      this.getAllProdutos()
    }
  }

  getAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria = resp
    })
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  cadastrarProduto(){
    this.categoria.id = this.idCategoria
    this.produto.categoria = this.categoria

    this.produtoService.postProdutos(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      this.alertas.showAlertSuccess('Produto cadastrado com sucesso!')
      this.produto = new Produto()
      this.getAllProdutos()
    })
    
  }

}
