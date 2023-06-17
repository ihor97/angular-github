import { Component } from '@angular/core';

import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  // закидуємо роутер модуль
  imports: [WelcomeComponent,RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
