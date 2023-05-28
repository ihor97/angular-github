import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    selector: 'app-header'
})
export class HeaderComponent {
    collapsed = true;
    @Output() featureSelected = new EventEmitter<string>()
    
    onSelect(feature: string) {
        this.featureSelected.emit(feature)
    }

}