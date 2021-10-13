import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  idCarrinho: number

  constructor(
    public auth : AuthService
  ) { }

  ngOnInit() {
    this.idCarrinho = environment.id
  }

}
