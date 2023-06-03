import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // з цією властивістю дані будуть оновлюватися кожного разу коли ми будемо щось міняти
  // це коштує багато ресурсів тому по замовчуванню воно виключене
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string,propName:string):any {
    if(value.length===0 || filterString==''){
      return value
    }
    const resArray=[]
    for(const item of value){
      if(item[propName]===filterString){
        resArray.push(item)
      }
    }
    return resArray
  }

}
