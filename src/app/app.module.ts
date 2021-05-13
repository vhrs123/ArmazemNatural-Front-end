import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BlogComponent } from './blog/blog.component';
import { ArmazemComponent } from './armazem/armazem.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    HomeComponent,
    ContatoComponent,
    BlogComponent,
    ArmazemComponent,
    CategoriaComponent,
    CategoriaDeleteComponent,
    CategoriaEditComponent,
    ProdutosComponent,
    ProdutosDeleteComponent,
    ProdutosEditComponent,
    AlertasComponent,
    CategoriaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
