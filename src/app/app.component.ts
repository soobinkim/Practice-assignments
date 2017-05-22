import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // date = new Date();
  // user = {
  //   firstName: 'soobin',
  //   lastName: 'kim',
  // }
  // currency assignment
  USD = 1.50
  UER = 1.50
  GBP = 1.50
  INR = 1.50
  AUD = 1.50
  CNY = 1.50
  num = 1;
  logNum(){
    console.log("num is:", this.num);
  }
}
