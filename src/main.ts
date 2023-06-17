import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}
// для того щоб зробити рут компоненту стандалоне треба бутстрапити з компоненти а не з модуля

bootstrapApplication(AppComponent)