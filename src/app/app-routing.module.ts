import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes:Routes=[
    // можна ще це добавити, pathMatch:'full' вказуємо для того тому що '' є частиною усіх шляхів, тобто робити редірект якщо весь шлях є ''
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    // робимо помалу lazy loading ми будемо підгружати рецепти тільки тоді коли будемо на них переходити
  
//   це новий синтаксис
// в кінці then резолвиться модуль і ми дістаємо наш RecipesModule
    {path:'recipes',loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
    {path:'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    {path:'shopping-list',loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}
    
    
]

@NgModule({
    // підщружаємо інші модулі так що перехід на інщу сторінку відбуватиметься швидше
    imports:[RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    // кожен модуль працює по своєму ладу, вони не комунікують між собою
    // не можна використовувати одні  і ті самі компоненти в різних модулях
    // ми його експортуємо так як хочемо його юзати в іншому модулі а не тут
    exports:[RouterModule]
})
export class AppRoutingModule{

}