import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hi on Angular course';
  public account: { age: number, name: string };
  public experience: number = 2;
  private _salary: number = 3000;

  public getSalary(): number {
    return this._salary;
  }
}