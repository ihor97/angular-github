import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'sortArray'
})
export class SortPipe implements PipeTransform {
    transform(value: any,propname:string): any {
    //   набагато кращий варік
        return value.sort((a,b)=>{
            if(a[propname]>b[propname]){
                return 1
            }else{
                return -1
            }

        })
    }

}