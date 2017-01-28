import { RouterModule } from '@angular/router'
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';
import { RegistrationComponent } from './components/registration.component'
import { MainPageComponent } from './components/mainpage.component'
import { CoursesComponent } from './components/courses.component'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"register", component: RegistrationComponent},
      {path:"main", component: MainPageComponent},
      {path:"courses", component: CoursesComponent},
      {path:"", redirectTo:"/main", pathMatch:'full' },
      {path:"**", redirectTo:"/main", pathMatch:'full' }
    ])],

  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    MainPageComponent,
    CoursesComponent
],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
