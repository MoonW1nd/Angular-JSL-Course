import { Component, OnInit } from '@angular/core';
import { products$ } from './data/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular course';
  public logo: string =
    'data:image/svg+xml;base64,PHN2ZyB' +
    '4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICA' +
    'gIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC' +
    '45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMw' +
    'bDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNS' +
    'A1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4za' +
    'C0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==';
  public width: number = 50;
  public desc: string = 'its logo';
  public placeholder: string = 'search term';
  public text: string;
  public products$: Observable<Product[]> = products$;

  public constructor(
  ) {

  }

  public ngOnInit(): void {
    // this.subscription = products$.subscribe((products: Product[]) => {
    //   this.products$ = products;
    // });
    // Нужно удалять подписки после при удалении компонентов(ngOnDestroy) иначе
    // можем получить утечки памяти
  }

  public clickOnImage(): void {
    // console.log('click');
  }
}