import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {
  professores: string[] = ["Marion", "Edson", "Marcel", "Marco"];

  remover(index: number){
    this.professores.splice(index, 1);
  }

}
