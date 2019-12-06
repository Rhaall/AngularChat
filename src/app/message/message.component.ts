import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent  {
  content : string;
  pseudo : string;
  heure : number;
  salles: string;
  minutes : number;
  constructor() { }


}
