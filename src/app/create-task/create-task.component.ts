import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { ListaTarefas } from '../list/base-tarefas';
import { Tarefa } from '../list/tarefa';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  tarefas = ListaTarefas;
  descricao = 'Nova Tarefa...'

  verifica(){
    const textbox = document.querySelector('#descricao') as HTMLInputElement;
    const checkbox = document.querySelector('#feito') as HTMLInputElement;

    this.tarefas.push({
      id: this.tarefas.length + 1,
      descricao: this.descricao,
      feito: checkbox.checked
    })
  }
}
