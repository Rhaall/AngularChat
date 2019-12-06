import { Component, OnInit } from '@angular/core';
import {ChatServiceService} from '../chat-service.service'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser :string;
  constructor(private service : ChatServiceService) { }

  ngOnInit() {
  }

  log(){
    this.service.currentPseudo = this.newUser;
    localStorage.setItem("pseudo",this.newUser)
    document.getElementById("routeur").setAttribute("routerLink","/ListesSalles")   
  }

}
