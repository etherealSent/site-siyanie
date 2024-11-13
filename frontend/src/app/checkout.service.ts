import { Injectable } from '@angular/core';
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  submitApplication(
      firstName: string,
      lastName: string,
      email: string,
      phone: string,
      streetAddress: string,
      city: string,
      country: string,
      company: string,
      zip: string,
      state: string,
      size: string,
  ) {
    console.log(
        `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}, size: ${size}.`,
    );
  }
}
