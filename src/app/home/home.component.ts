import {Component, inject} from '@angular/core';import {HousingLocationComponent} from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
    <app-housing-location
        *ngFor="let product of housingLocationList"
        [product]="product"
      ></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: Product[] = [];

  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}