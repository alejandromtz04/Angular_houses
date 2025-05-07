import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-reactive-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './reactive-forms.component.html',
    styleUrl: './reactive-forms.component.css'
})

export class ReactiveFormsComponent { 

    activity = new FormControl();
    list: string[]

    constructor() {
        this.list = [];

        let data = localStorage.getItem('activities');
        if (data != null) {
            let array = JSON.parse(data);
            if (array != null) {
                for (let activity of array) {
                    this.list.push(activity);
                }
            }
        }
    }

    add() {
        this.list.push(this.activity.value);
        localStorage.setItem('activities', JSON.stringify(this.list));
        this.activity.setValue('');
    }

    erase(pos: number) {
        this.list.splice(pos, 1);
        localStorage.clear();
        localStorage.setItem('activities', JSON.stringify(this.list));
    }

    deleteAll() {
        localStorage.clear();
        this.list = [];
    }
}