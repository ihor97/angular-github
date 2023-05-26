import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";
import { AuthGuard } from "./auth-guard.service";


const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,children:[
      // динамічні параметри /:
      {path:':id/:name',component:UserComponent},
    ]},
    // створення дочірніх роутів і треба забирати servers/
    // добавлення canActivate по переходу по силці
    // canActivateChild для переходу по дочірнім роутам
    {path:'servers',canActivateChild:[AuthGuard],component:ServersComponent,children:[
      {path:':id',component:ServerComponent},
      {path:':id/edit',component:EditServerComponent},
      
    ]},
    {path:'not-found',component:PageNotFoundComponent},
    // перенаправлення всіх неправильних шляхів
    // і це має стояти в кінці
    {path:'**',redirectTo:'not-found'}
  ]
//   не треба в цей модуль добавляти declarations тому що вони вже є в app.module
@NgModule({
    imports:[
    // конфігурація модуля
        RouterModule.forRoot(appRoutes)
    ],
    // вказує що буде доступним ззовні цього модуля
    exports:[RouterModule]
})
export class AppRoutingModule{

}