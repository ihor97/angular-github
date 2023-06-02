import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  // тип реактивної форми
  signupForm: FormGroup
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      // створюмо групу
      'userData': new FormGroup({
        // добавляємо валідатори
        'username': new FormControl(null, Validators.required),
        // масив валідаторів
        'email': new FormControl(null, [Validators.required, Validators.email]),
        // тут ми вказуємо значення інпута
      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }
  onAddHobbys() {
    const control=new FormControl(null,Validators.required);
    // кастуємо
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }
  onSubmit() {
    // так як ми створили форму ми зразу можемо отримати доступ до неї
    console.log(this.signupForm);

  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
