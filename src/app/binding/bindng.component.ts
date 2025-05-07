import { Component } from "@angular/core";

@Component({
    selector: 'app-biding',
    standalone: true,
    imports: [],
    templateUrl: './binding.component.html'
})

export class BindingComponent {
    name = ''

    setNameOne() {
        this.name = 'Juan';
    }

    setNameTwo() {
        this.name = 'Ana'
    }

 }