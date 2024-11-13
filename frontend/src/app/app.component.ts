import {Component} from '@angular/core';
import { MainComponent } from './main/main.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent, RouterLink, RouterOutlet],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}