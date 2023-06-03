import { FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
// винесли валідатори в окремий клас
export class CustomValidators{
    static invalidProjectName(control:FormControl):{[s:string]:boolean}{
        if(control.value==='Test'){
            return{'invalidProjectName':true}
        }
        return null
    }
    static asyncInvalidProjectName(control:FormControl):Promise<any> | Observable<any>{
        return new Promise((res,rej)=>{
            setTimeout(() => {
              if (control.value==='Test') {
                res({'invalidProjectName':true})
              }
              res(null)
            }, 2000);
          })
        }
      
    }
