import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { MainComponent } from './main/main.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, MainComponent, RouterLink, RouterOutlet],  
template: `
    <main>
      <a [routerLink]="['/']">
      <header class="brand-name">
              <div class="buttons">
            <div class="button">
                <div class="icon">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Apple Logo">
                        <path id="Vector" d="M25.3594 1.5415C23.5818 1.6448 21.5412 2.63508 20.3279 3.89616C19.2318 5.04316 18.3669 6.74665 18.72 8.39469C20.6517 8.44557 22.5906 7.42963 23.7515 6.14543C24.8353 4.94447 25.6569 3.26817 25.3594 1.5415ZM25.4648 8.39168C22.6759 8.39168 21.5098 10.105 19.5781 10.105C17.5909 10.105 15.7743 8.50008 13.3693 8.50008C10.0979 8.50162 5.125 11.532 5.125 18.6715C5.125 25.1665 11.0106 32.3748 14.3328 32.3748C16.3509 32.3949 16.8401 31.106 19.5781 31.0921C22.3192 31.0721 22.9107 32.3918 24.9318 32.3748C27.2073 32.3579 28.9844 29.8573 30.2825 27.8763C31.2136 26.458 31.5965 25.7339 32.318 24.1305C26.9637 22.7739 25.8985 14.1395 32.318 12.3542C31.1062 10.2869 27.5691 8.39168 25.4648 8.39168Z" fill="#000000"/>
                        </g>
                        </svg>
                </div>
            </div>
            <div class="button">
                <div class="text">Store</div>
            </div>
            <div class="button">
                <div class="text">IReview</div>
            </div>
            <div class="button">
                <div class="text">ITools</div>
            </div>
            <div class="button">
                <div class="text">ICards</div>
            </div>
            <div class="button">
                <div class="text">QuickTime</div>
            </div>
            <div class="button">
                <div class="text">Support</div>
            </div>
        </div>
        <div class="news-bar">
            <div class="news-item">Hot News</div>
            <div class="news-item">Hiring</div>
            <div class="news-item">Hardware</div>
            <div class="news-item">Software</div>
            <div class="news-item">Made4Mac</div>
            <div class="news-item">Education</div>
            <div class="news-item">Creative</div>
            <div class="news-item">Small Biz</div>
            <div class="news-item">Developer</div>
        </div>
        <div class="logo">
          <img width="150px" class="brand-logo" src="/assets/siyan1.svg" alt="logo" aria-hidden="true" />
        </div>
      </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}