import { Component, inject } from '@angular/core';
import {Product} from '../product';
import { CommonModule } from '@angular/common';
import {ProductsService} from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  productList: Product[] = [];

  productsService: ProductsService = inject(ProductsService);

  constructor() {
    this.productList = this.productsService.getAllProducts();
  }
}