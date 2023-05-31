import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number
  editMode=false
  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(
      (params:Params)=>{
        if(params['id']){
          this.id=+params['id']
          this.editMode=true
        }else{
          console.log(+params['id']);
          
          this.editMode=false
        }
      }
    )
  }

}
