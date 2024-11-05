import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { MainComponent } from './main/main.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'main',
      component: MainComponent,
      title: 'Siyanie Project',
    },
  ];
  export default routeConfig;