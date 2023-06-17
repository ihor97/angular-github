import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
@NgModule({
  // пайпи директиви і компоненти можна декларувати тільки раз
  declarations: [AppComponent,HeaderComponent],
  // сюди додаються інші модулі що мають декоратор NgModule
  imports: [
    // BrowserModule можна заюзати тільки раз
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // забираємо RecipesModule,AuthModule,ShoppingListModule звідси так як ми його будемо підзружати ліниво
    SharedModule,
    CoreModule,
  ],
  // providers: [LoggingService],
//  це компонента яка лежить в index.html 
  bootstrap: [AppComponent],
  // коли ми хочемо створити компоненту вручну тоді треба ще додати це поле
 
})
export class AppModule { }
