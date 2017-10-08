import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular course';
  public logo: string = 'assets/images/angular.png';
  public width: number = 50;
  public desc: string = 'its logo';
  public placeholder: string = 'search term';
  public text: string;

  public clickOnImage(): void {
    // console.log('click');
  }
}