import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Product} from '../product';
import { ProductsService } from '../products.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: `./product-preview.component.html`,
  styleUrls: ['./product-preview.component.css'],
})
export class ProductPreviewComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  selectedSize: string = '';
  product: Product | undefined;
  constructor() {
      const productId = String(this.route.snapshot.params['id']);
      this.product = this.productsService.getProductById(productId);
  }
}