import { HousingService } from './../housing.service';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Interface_HousingLocation } from '../interfaces/housing-location.interface';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule, InputTextModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  housingLocationList: Interface_HousingLocation[] = []
  HousingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.HousingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filteredLocationList: Interface_HousingLocation[] = [];

  filterResults(text: string) {
    if(!text) { 
      this.filteredLocationList = this.housingLocationList;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
