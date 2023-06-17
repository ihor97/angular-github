import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsComponent } from './welcome/details/details.component';

// коли ми прописуємо standalone тоді з модуля треба видалити import
@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  // сюди закидуємо standalone components
  imports: [BrowserModule,DetailsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
