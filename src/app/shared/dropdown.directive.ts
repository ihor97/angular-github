import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    @HostBinding('class.open') addOpen=false

    @HostListener('click') mouseClick(){
        this.addOpen=!this.addOpen
    }

}