import {Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';

const routeConfig: Routes = [
    {
      path: '',
      loadComponent: () => import('./main/main.component').then(m => m.MainComponent),
      title: 'Siyanie Project',
    },
    {
        path: 'products/:id',
        loadComponent: () => import('./product-preview/product-preview.component').then(m => m.ProductPreviewComponent),
      title: 'Siyanie Project',
    },
    {
        path: 'checkout/:id',
        loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent),
        title: 'Siyanie Project',
    },
  ];
  export default routeConfig;