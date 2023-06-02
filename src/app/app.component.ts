import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // другий варіант використовуючи ViewChild
  @ViewChild('f') signupForm: NgForm
  defaultQuestion = 'pet'
  answer
  genders = ['male', 'female']
  user={
    username:'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  submitted=false
  suggestUserName() {
    const suggestedName = 'Superuser';
    // через метод setValue можна задавати значення форми
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // })
    // цей підхід не переписує всю форму а змінює тільки те шо ми хочемо
    this.signupForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    )
  }

  // f:NgForm тип автоматично створеної форми ангуларом
  // onSubmit(f:NgForm){
  //   console.log(f);

  // }
  onSubmit() {
    console.log(this.signupForm);
    this.submitted=true
    this.user.username=this.signupForm.value.userData.username
    this.user.email=this.signupForm.value.userData.email
    this.user.secretQuestion=this.signupForm.value.secret
    this.user.answer=this.signupForm.value.questionAnswer
    this.user.gender=this.signupForm.value.gender

    // ресетаємо форму
    this.signupForm.reset()

  }

}
