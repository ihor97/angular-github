import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth/auth.component";

const routes:Routes=[
    // можна ще це добавити, pathMatch:'full' вказуємо для того тому що '' є частиною усіх шляхів, тобто робити редірект якщо весь шлях є ''
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'auth',component:AuthComponent}
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