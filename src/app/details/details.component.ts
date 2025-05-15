import { Interface_HousingLocation } from './../interfaces/housing-location.interface';
import { HousingService } from './../housing.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-details',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Toast,
    ButtonModule,
    Ripple,
    AvatarModule,
    RouterModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  providers: [MessageService],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: Interface_HousingLocation | undefined;

  applyForm: FormGroup;

  constructor(
    private readonly messageService: MessageService,
    private readonly router: Router,
    private formBuilder: FormBuilder
  ) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);

    this.applyForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitApplication(): void {
    if (this.applyForm.invalid) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Incomplete Form',
        detail: 'Please fill out all required fields correctly.',
      });
      return;
    }

    const { firstName, lastName, email } = this.applyForm.value;

    this.housingService.submitAplication(firstName, lastName, email);

    this.messageService.add({
      severity: 'success',
      summary: 'Added Successfully',
      detail: 'The user has been registered successfully',
    });

    this.applyForm.reset(); // Optional: clear form after submit
  }

  getBack(): void {
    this.router.navigate(['']);
  }
}
