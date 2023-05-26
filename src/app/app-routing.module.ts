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
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";


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
      // resolver
      {path:':id',component:ServerComponent,resolve:{server:ServerResolver}},
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]},
      
    ]},
    // повідомлення з помилкою
    {path:'not-found',component:ErrorPageComponent,data:{message:'Page not found!'}},
    // перенаправлення всіх неправильних шляхів
    // і це має стояти в кінці
    {path:'**',redirectTo:'not-found'}
  ]
//   не треба в цей модуль добавляти declarations тому що вони вже є в app.module
@NgModule({
    imports:[
    // конфігурація модуля
    // {useHash:true} для старих браузерів
        RouterModule.forRoot(appRoutes,{useHash:true})
    ],
    // вказує що буде доступним ззовні цього модуля
    exports:[RouterModule]
})
export class AppRoutingModule{

}