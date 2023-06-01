import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // другий варіант використовуючи ViewChild
  @ViewChild('f') signupForm:NgForm
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // f:NgForm тип автоматично створеної форми ангуларом
  // onSubmit(f:NgForm){
  //   console.log(f);
    
  // }
  onSubmit(){
    console.log(this.signupForm);
    
  }

}
