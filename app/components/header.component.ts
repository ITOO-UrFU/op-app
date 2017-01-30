import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'header-comp',
  template: `<div class="header-comp">
  <a routerLink="/courses">Курсы</a>
  <a routerLink="/main">Главная</a>
  <a routerLink="/register">Регистрация</a>
  </div><router-outlet></router-outlet>
  `,
  styles: [`
    .header-comp {
      width: 100%; 
      height: 30px; 
      background: #e6e6e6; 
    }`]
})

export class HeaderComponent {}
