import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  imports: [],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  numero: number = 1;

  incrementarNumero(){
    this.numero++;
  }
}

