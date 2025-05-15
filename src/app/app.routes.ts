import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ImportHomeComponent } from './import-home/import-home.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: ImportHomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'reactive-forms',
        component: ReactiveFormsComponent
    },
    {
        path: 'form-group',
        component: FormGroupComponent
    }
];
