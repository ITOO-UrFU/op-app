import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'header-comp',
  template: `<div class="ui four item menu">
  <a class="item" routerLink="/main">Главная</a>
  <a class="item" routerLink="/courses">Курсы</a>
  <a class="item" routerLink="/register">Регистрация</a>
  <a class="item" routerLink="/programs">Программы</a>
  </div><router-outlet></router-outlet>
  `

})

export class HeaderComponent {}
