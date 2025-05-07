import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Interface_HousingLocation } from '../interfaces/housing-location.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'] 
})
export class HousingLocationComponent {
  @Input() housingLocation!: Interface_HousingLocation;
}
