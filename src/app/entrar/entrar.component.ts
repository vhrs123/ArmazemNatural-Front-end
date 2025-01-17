import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserLogin = new UserLogin

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      
      environment.email = this.userLogin.email
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id
      environment.tipo = this.userLogin.tipo

      localStorage.setItem('token', this.userLogin.token)

      this.router.navigate(['/inicio'])

    }, erro => {
      if(erro.status == 500){
        this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
      }
    }
    )
  }

}