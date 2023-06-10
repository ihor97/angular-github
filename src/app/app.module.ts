import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { RecipesModule } from './recipes/recipes.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective,
   
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
   
  ],

  // сюди додаються інші модулі що мають декоратор NgModule
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule
  ],
  providers: [ShoppingListService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
//  це компонента яка лежить в index.html 
  bootstrap: [AppComponent],
  // коли ми хочемо створити компоненту вручну тоді треба ще додати це поле
  entryComponents:[
    AlertComponent
  ]
})
export class AppModule { }
