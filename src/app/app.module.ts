import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ChatServiceService} from './chat-service.service'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import {MatButtonModule} from '@angular/material/button';
import { MessageComponent } from './message/message.component';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ListesSallesComponent} from './listes-salles/listes-salles.component';
import { SalleComponent } from './salle/salle.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
const appRoutes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'salle', component: SalleComponent },
  { path: 'ListesSalles', component: ListesSallesComponent },
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent,
    ListesSallesComponent,
    SalleComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ChatServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
