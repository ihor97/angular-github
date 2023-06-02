import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    // створюмо групу
    'userData':new FormGroup({
      // добавляємо валідатори
    'username':new FormControl(null, Validators.required),
    // масив валідаторів
    'email':new FormControl(null,[Validators.required,Validators.email]),
    // тут ми вказуємо значення інпута
    }),

    'gender':new FormControl('male')
  })
}
onSubmit(){
  // так як ми створили форму ми зразу можемо отримати доступ до неї
  console.log(this.signupForm);
  
}
}
