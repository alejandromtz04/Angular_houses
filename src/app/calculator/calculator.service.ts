import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CalculatorService {
   sumMethod(a: number, b: number): number {
    console.log(a,b)
    return a + b;
   }

   substractMethod(a: number, b: number) : number {
    return a - b;
   }

   divideMethod(a: number, b: number): number {
    if ( b === 0) throw new Error('Division by zero')
    return a / b;
   }

   multiplyMethod(a: number, b: number): number {
    return a * b
   }
}