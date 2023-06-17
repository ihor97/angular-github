import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  templateUrl: './dashboard.component.html',
  standalone:true,
  // імпортужмо для того щоб працювали директиви з RouterModule
  imports:[RouterModule]
})
export class DashboardComponent {}
