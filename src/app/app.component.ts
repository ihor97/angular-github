import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
default='Advanced'
@ViewChild('f') form:NgForm


  submitForm(){
    console.table(this.form.value);
    
  }
}
