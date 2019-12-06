import { Component, OnInit } from '@angular/core';
import {MessageComponent} from '../message/message.component'
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {
  contents : string;
  currentPseudo : string;
  currentroom:string;
  messagesList : MessageComponent[];
  constructor(private service : ChatServiceService) { }

  ngOnInit() {
    this.service.refreshMessages().subscribe((messsages :MessageComponent[])=>this.messagesList =messsages)
    this.currentroom =localStorage.getItem("room");
    this.currentPseudo = localStorage.getItem("pseudo");
  }
  sendmessage() {
    const newmessage: MessageComponent = {
      content : this.contents,
      pseudo : this.currentPseudo,
      heure : new Date().getMinutes(),
      minutes : new Date().getHours(),
      salles: this.service.currrentRoom
    }
    this.service.sendMessage(newmessage).subscribe((message: MessageComponent) => {
      this.messagesList.push(newmessage)
    })
  }
}
