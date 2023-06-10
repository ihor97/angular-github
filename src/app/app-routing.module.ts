import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";

const routes:Routes=[
    // можна ще це добавити, pathMatch:'full' вказуємо для того тому що '' є частиною усіх шляхів, тобто робити редірект якщо весь шлях є ''
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    // робимо помалу lazy loading ми будемо підгружати рецепти тільки тоді коли будемо на них переходити
  
//   це новий синтаксис
// в кінці then резолвиться модуль і ми дістаємо наш RecipesModule
    {path:'recipes',loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)}
    
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    // кожен модуль працює по своєму ладу, вони не комунікують між собою
    // не можна використовувати одні  і ті самі компоненти в різних модулях
    // ми його експортуємо так як хочемо його юзати в іншому модулі а не тут
    exports:[RouterModule]
})
export class AppRoutingModule{

}