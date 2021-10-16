import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { StatusVenda } from '../model/StatusVenda';
import { AuthService } from '../service/auth.service';
import { createPopper } from '@popperjs/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  idCarrinho: number
  statusVenda: StatusVenda = new StatusVenda()
  valorTotal: number = 0

  constructor(
    public auth : AuthService
  ) {  }

  ngOnInit() {
    this.idCarrinho = environment.id
    
  }



  
 
   

}
