import { Component, OnInit } from '@angular/core';
import {ChatServiceService} from '../chat-service.service'

@Component({
  selector: 'app-listes-salles',
  templateUrl: './listes-salles.component.html',
  styleUrls: ['./listes-salles.component.css']
})
export class ListesSallesComponent implements OnInit {
  salleNames : string[];
  constructor(private service : ChatServiceService) { }

  ngOnInit() {
    this.service.getAllRooms().subscribe((salleNames: string[]) => this.salleNames = salleNames);
  }
  salleChosed(int: string)
  {
    localStorage.setItem("room",int)
    this.service.currrentRoom = int;
  }
}
