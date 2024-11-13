import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ProductsService} from "../products.service";
import {Product} from "../product";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CheckoutService} from "../checkout.service";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  selectedSize: string | undefined;

  route: ActivatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);
  checkOutService = inject(CheckoutService);
  product: Product | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    streetAddress: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    company: new FormControl(''),
    zip: new FormControl(''),
    state: new FormControl(''),
  });

  constructor() {
    const productId = String(this.route.snapshot.params['id']);
    this.product = this.productsService.getProductById(productId);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        this.selectedSize = params['size'];
    })
  }

  submitApplication() {
    this.checkOutService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ?? '',
        this.applyForm.value.email ?? '',
        this.applyForm.value.phone ?? '',
        this.applyForm.value.streetAddress ?? '',
        this.applyForm.value.city ?? '',
        this.applyForm.value.country ?? '',
        this.applyForm.value.company ?? '',
        this.applyForm.value.zip ?? '',
        this.applyForm.value.state ?? '',
        this.selectedSize ?? '',
    );
  }
}
