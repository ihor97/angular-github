import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-valodators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  selectStatus=['Stable', 'Critical', 'Finished']
  forbidden='Test'
  signupForm:FormGroup

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      data:new FormGroup({
        project:new FormControl(null,[Validators.required,CustomValidators.invalidProjectName.bind(this)],CustomValidators.asyncInvalidProjectName.bind(this)),
        email:new FormControl(null,[Validators.email,Validators.required])
      }),
      status:new FormControl('Critical')
    })
    
  }
  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    
    
  }
  checkForbiddenName(control:FormControl):{[s:string]:boolean}{
    if(control.value==this.forbidden){
      return {'isForbidden':true}
    }
    return null
  }

  asyncValidator(control:FormControl):Promise<any>|Observable<any>{

    return new Promise((res,rej)=>{
      setTimeout(() => {
        if (control.value==='Test') {
          res({'isForbidden':true})
        }
        res(null)
      }, 2000);
    })
  }

}
