import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected productList: Product[] = [
    {
      id: 0,
      name: 'STEVE JOBS ICONIC Y2K TURTLENECK',
      description: "a",
      price: 7000,
      photo: "/assets/image.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 1,
      name: 'FUCK APPLE T-SHIRT',
      description: "a",
      price: 5000,
      photo: "/assets/image.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: 'STEVE JOBS ICONIC Y2K TURTLENECK',
      description: "a",
      price: 7000,
      photo: "/assets/image.png",
      sizes: ["S", "M", "L", "XL"]
    }
  ]

  getAllProducts(): Product[] {
    return this.productList;
  }

  getProductById(id: number): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

}
