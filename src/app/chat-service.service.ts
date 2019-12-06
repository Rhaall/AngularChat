
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {MessageComponent} from './message/message.component'


@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  currrentRoom : string ;
  currentPseudo : string;
  messages : string[];
  constructor(private http: HttpClient) { }
  refreshMessages () : Observable<MessageComponent[]>{
    return this.http.get<MessageComponent[]>(`${environment.backUrl}/messages`)
  }
  sendMessage(message : MessageComponent) : Observable<MessageComponent>{
    return this.http.post<MessageComponent>(`${environment.backUrl}/messages`, message)
  }
  getAllRooms(): Observable<string[]>{    
        return this.http.get<string[]>(`${environment.backUrl}/channels`)
  }

}
