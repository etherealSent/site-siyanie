import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  protected housingLocationList: Product[] = [
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
  ];

  getAllHousingLocations(): Product[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): Product | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
