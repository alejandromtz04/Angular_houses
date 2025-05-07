import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-form-group',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-group.component.html',
    styleUrl: './form-group.component.css'
})

export class FormGroupComponent {
    data: string = '';

    contactForm = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl('')
    });


    submitData() {
        this.data = `Name=${this.contactForm.value.name}
        Email = ${this.contactForm.value.email}
        Message=${this.contactForm.value.message}
        `;
    }
}