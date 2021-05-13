import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  token = localStorage.getItem('token')

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(this.token == null){
      this.router.navigate(["/home"])
    }
  }

}
