import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';


@Component({
  selector: 'app-import-home',
  imports: [HomeComponent],
  templateUrl: './import-home.component.html',
  styleUrl: './import-home.component.css'
})
export class ImportHomeComponent {

}
