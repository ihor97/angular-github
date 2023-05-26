import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// створення шляхів
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent,children:[
    // динамічні параметри /:
    {path:':id/:name',component:UserComponent},
  ]},
  // створення дочірніх роутів і треба забирати servers/
  {path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent},
    
  ]},
  {path:'not-found',component:PageNotFoundComponent},
  // перенаправлення всіх неправильних шляхів
  // і це має стояти в кінці
  {path:'**',redirectTo:'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // конфігурація модуля
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
