import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
selector:'[appPlaceholder]'
})
export class PlaceholderDirective{
    // ця директива відповідає за те де ми будемо програмно вставляти нашу компоненту
    // ViewContainerRef дає інфу де сидить компонента
    constructor(public viewContainerRef:ViewContainerRef){}

}