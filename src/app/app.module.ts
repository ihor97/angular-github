import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
@NgModule({
  // пайпи директиви і компоненти можна декларувати тільки раз
  declarations: [AppComponent,HeaderComponent,AuthComponent],
  // сюди додаються інші модулі що мають декоратор NgModule
  imports: [
    // BrowserModule можна заюзати тільки раз
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
//  це компонента яка лежить в index.html 
  bootstrap: [AppComponent],
  // коли ми хочемо створити компоненту вручну тоді треба ще додати це поле
 
})
export class AppModule { }
