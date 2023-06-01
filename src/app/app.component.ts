import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // f:NgForm тип автоматично створеної форми ангуларом
  onSubmit(f:NgForm){
    console.log(f);
    
  }

}
