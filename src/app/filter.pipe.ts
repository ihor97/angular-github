import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
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
