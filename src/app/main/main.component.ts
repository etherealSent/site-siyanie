import { Component, inject } from '@angular/core';
import {Product} from '../product';
import { CommonModule } from '@angular/common';
import {ProductsService} from '../products.service';
import { ProductComponent } from '../product/product.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent, HousingLocationComponent],
  template: `
    <video autoplay muted loop id="background-video">
      <source src="/assets/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <section class="results">
    <app-housing-location
        *ngFor="let product of housingLocationList"
        [product]="product"
      ></app-housing-location>
    `,
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  productList: Product[] = [];
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: Product[] = [];

  housingService: HousingService = inject(HousingService);

  productsService: ProductsService = inject(ProductsService);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.productList = this.productsService.getAllProducts();
  }
}