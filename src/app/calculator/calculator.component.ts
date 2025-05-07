import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CalculatorService } from "./calculator.service";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-calculator',
    standalone: true,
    imports: [CommonModule, FormsModule, ButtonModule],
    templateUrl: './calculator.component.html'
})

export class CalculatorComponent{
    num1: number = 0;
    num2: number = 0;
    result : number | null = null;
    error: string | null = null;

    constructor(private calculateService: CalculatorService) {}

    calculate(operation: string) {
        const a = Number(this.num1)
        const b = Number(this.num2)

        console.log(a , b)

        try {

            switch (operation) {
                case '+':
                    this.result = this.calculateService.sumMethod(a, b);
                    console.log(a + b)
                    break;
                case '-':
                    this.result = this.calculateService.substractMethod(a,b);
                    break;
                case '/':
                    this.result = this.calculateService.divideMethod(a,b);
                    break;
                case '*':
                    this.result = this.calculateService.multiplyMethod(a,b)
            }

        } catch (error: any) {
            this.error = error.message;
        }
    }

 }