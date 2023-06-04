import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// для запитів
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth.-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  // провайдимо інтерцептор
  // HTTP_INTERCEPTORS токен
  providers: [{ 
    provide: HTTP_INTERCEPTORS,
     useClass: AuthInterceptorService, 
     multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
