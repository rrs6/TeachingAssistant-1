import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Rafael", cpf: "", email: "", gitLogin: "",};
}

export class Aluno {
  nome: string;
  cpf: string;
  gitLogin: string;
  email: string;
}
