import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'header-comp',
  template: `<div style='width: 100%; height: 30px; background: gray;'>
  <a routerLink="/courses">Курсы</a>
  <a routerLink="/main">Главная</a>
  <a routerLink="/register">Регистрация</a>

  </div><router-outlet></router-outlet>`,
})

export class HeaderComponent {}
