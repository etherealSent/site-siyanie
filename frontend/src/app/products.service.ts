import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  protected productList: Product[] = [
    {
      id: "e3823634-eb23-475c-aa81-e2903262e82f",
      name: 'STEVE JOBS ICONIC 90s TURTLENECK',
      description: "ссылка на статью",
      price: 7000,
      photo: "/assets/image.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "019f08ea-2b4c-4be7-9c60-b3050fd87ba7",
      name: 'FUCK APPLE T-SHIRT',
      description: "a",
      price: 5000,
      photo: "/assets/image.png",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: "ad618a3d-bf4b-4c4b-895d-6ae9541a3574",
      name: 'STEVE JOBS ICONIC Y2K TURTLENECK',
      description: "a",
      price: 7000,
      photo: "/assets/image.png",
      sizes: ["S", "M", "L", "XL"]
    },
  ];

  getAllProducts(): Product[] {
    return this.productList;
  }

  getProductById(id: string): Product | undefined {
    return this.productList.find((product) => product.id === id);
  }

}
