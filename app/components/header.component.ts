import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'header-comp',
  template: `<div class="ui attached stackable menu">
    <div class="ui container">
  <a class="item" routerLink="/main"><i class="home icon"></i> Главная</a>
  <a class="item" routerLink="/courses"><i class="grid layout icon"></i> Курсы</a>
  <a class="item" routerLink="/programs"><i class="grid layout icon"></i> Программы</a>

  <a class="right item" routerLink="/register">Регистрация</a>
  </div>
  </div>
  <div class="ui container">
  <router-outlet></router-outlet>
  
  </div>
  `

})

export class HeaderComponent {}
