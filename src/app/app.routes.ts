import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { BindingComponent } from './binding/bindng.component';
import { Component } from '@angular/core';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
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
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'binding',
        component: BindingComponent
    }
    ,
    {
        path: 'dado',
        component: DadoComponent
    },
    {
        path: 'cronometer',
        component: CronometroComponent
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
