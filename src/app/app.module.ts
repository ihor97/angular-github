import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

// коли ми прописуємо standalone тоді з модуля треба видалити import
@NgModule({
  declarations: [AppComponent],
  // сюди закидуємо standalone components
  imports: [BrowserModule,WelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
