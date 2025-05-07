import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-control-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: './control-form.component.html'
})

export class ControlFormComponent {
    convertion = '';
    powerNumber = '';
    quantity = '';

    formConvertion = new FormGroup({
        decimalNumber: new FormControl(''),
        base: new FormControl('octal'),
        power: new FormControl('2'),
        large: new FormControl(true)
    });

    // maybe posible for optimization

}