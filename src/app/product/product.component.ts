import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product',
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
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
}
