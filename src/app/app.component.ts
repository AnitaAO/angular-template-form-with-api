import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-template-form-with-api';

  onFormSubmitted(){
    console.log("form is submitted successfully")
  }
}
