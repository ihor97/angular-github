import { Component } from '@angular/core';
// import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  // можна буде юзати тоді коли наша компента буде standalone 
  // imports:[DetailsComponent]
})
export class WelcomeComponent {}
