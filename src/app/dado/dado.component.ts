import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  //value: number = Math.floor(Math.random() * 6 +1)

  @Input() value: string = '';

  
  value1: number = this.returnRandom();
  value2: number = this.returnRandom();
  value3: number = this.returnRandom();
  result: string = '';

  returnRandom() {
    return Math.floor(Math.random() * 6 + 1)
  }

  rollDice() {
    this.value1 = this.returnRandom();
    this.value2 = this.returnRandom()
    this.value3 = this.returnRandom()

    if (this.value1 === this.value2 && this.value1 == this.value3){
      this.result = 'You won!'
    } else {
      this.result = 'You lose!'
    }
  }

}
