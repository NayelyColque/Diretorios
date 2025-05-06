import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  imports: [],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})

export class TarefasComponent {
  mostrarConcluidas = false;

  disciplinas: any[] = [
    { id: 1, nome: 'Estudar', concluida: false },
    { id: 2, nome: 'Corrigir', concluida: true },
    { id: 3, nome: 'Comprar', concluida: false },
    { id: 4, nome: 'Levar', concluida: true },
    { id: 5, nome: 'Outro', concluida: false }
  ];

  alternarFiltro() {
    this.mostrarConcluidas = !this.mostrarConcluidas;
  }
}
