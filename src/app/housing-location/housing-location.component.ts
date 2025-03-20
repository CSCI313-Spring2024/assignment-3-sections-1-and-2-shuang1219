import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, RouterLink, RouterOutlet],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
  standalone: true
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
