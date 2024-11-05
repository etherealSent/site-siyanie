import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import { RouterModule } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="product.photo"
        alt="Exterior photo of {{ product.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ product.name }}</h2>
      <a [routerLink]="['/details', product.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() product!: Product;
}
