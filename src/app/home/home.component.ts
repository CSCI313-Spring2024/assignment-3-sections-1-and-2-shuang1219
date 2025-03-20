import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];  
  filteredLocationList: HousingLocation[] = []; 

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = [...this.housingLocationList]; 
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = [...this.housingLocationList];
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}

