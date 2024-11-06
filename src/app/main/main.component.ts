import { Component, inject } from '@angular/core';
import {Product} from '../product';
import { CommonModule } from '@angular/common';
import {ProductsService} from '../products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <video autoplay muted loop id="background-video">
      <source src="/assets/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <div class="main-content">
        <div class="title">
          <span class="title-part title-part-border white">t</span>
          <span class="title-part title-part-border blue">h</span>
          <span class="title-part title-part-border red">e</span>
          <span class="title-part space">  </span>
          <span class="title-part large white">Apple.</span>
        </div>
        <div class="subtitle">
          <span class="white">Now at the </span>
          <span class="bold white">Siyanie Project</span>
        </div>
        <div class="definition hide-on-phone">
          <div class="definition-text">siyanie [ /ˈʃʌɪnɪŋ/ ] adjective - giving out or reflecting bright light</div>
        </div>
      </div>  
      <div class ="results">
          <app-product
          *ngFor="let product of productList"
          [product]="product"
          ></app-product>
      </div>
    </div>
  `,
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