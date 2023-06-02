import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
// тип реактивної форми
  signupForm:FormGroup
ngOnInit(): void {
  this.signupForm=new FormGroup({
    // робимо наші інпути
    'username':new FormControl(null),
    'email':new FormControl(null),
    // тут ми вказуємо значення інпута
    'gender':new FormControl('male')
  })
}
onSubmit(){
  // так як ми створили форму ми зразу можемо отримати доступ до неї
  console.log(this.signupForm);
  
}
}
