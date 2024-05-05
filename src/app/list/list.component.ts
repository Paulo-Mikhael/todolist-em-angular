import { Component, OnInit } from '@angular/core';
import { ListaTarefas } from './base-tarefas';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  title = 'Lista de Tarefas';
  tarefas = ListaTarefas;

  ngOnInit(): void {
    console.log('filhos ' + this.tarefas.length);
  }
}
