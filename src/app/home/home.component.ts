import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLoadServers(id:number){
    // ми можемо задавати масив як у директиві routerLink
    // так в ts файлі можна створювати фрашменти і кверіпараметри
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:1},fragment:'loading'})
  }
}
