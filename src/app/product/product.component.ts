import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  template: `
            <section class="product">
                <p class="product-title">{{ product.name }}</p> 
                <img 
                  class="product-photo"
                  [src] ="product.photo" 
                  alt= {{ product.name }}
                />
            </section>
              `,
            styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product!: Product;
}