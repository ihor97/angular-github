import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forbiddenUserName=['Chris','Anna']
  genders = ['male', 'female'];
  // тип реактивної форми
  signupForm: FormGroup
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      // створюмо групу
      'userData': new FormGroup({
        // добавляємо валідатори
        // біндимо
        'username': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        // масив валідаторів
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails),
        // тут ми вказуємо значення інпута
      }),

      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
    // зміна параметрів в формі
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{
    //     console.log(value);
        
    //   }
    // )
    // показує зміну статусів
    this.signupForm.statusChanges.subscribe(
      (value)=>{
        console.log(value);
        
      }
    )
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
  forbiddenNames(control:FormControl):{[s:string]:boolean}{
    // idexof вертає -1 але -1 це є true так що треба добавити перевірку
     if(this.forbiddenUserName.indexOf(control.value)!==-1){
      return {'nameIsForbidden':true}
     }
     return null
  }

  forbiddenEmails(control:FormControl):Promise<any>| Observable<any>{
    const promise=new Promise<any>((res,rej)=>{
      setTimeout(() => {
        if(control.value==='test@test.com'){
          res({
            'emailIsForbidden':true
          })
        }else{
          res(null)
        }
      }, 2000);
    })
    return promise
  }
}
