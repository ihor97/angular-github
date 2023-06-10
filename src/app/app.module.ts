import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/aurh.module';
@NgModule({
  // пайпи директиви і компоненти можна декларувати тільки раз
  declarations: [AppComponent,HeaderComponent],
  // сюди додаються інші модулі що мають декоратор NgModule
  imports: [
    // BrowserModule можна заюзати тільки раз
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AuthModule
  ],
  providers: [],
//  це компонента яка лежить в index.html 
  bootstrap: [AppComponent],
  // коли ми хочемо створити компоненту вручну тоді треба ще додати це поле
 
})
export class AppModule { }
