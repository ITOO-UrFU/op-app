import { RouterModule } from '@angular/router'
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';
import { RegistrationComponent } from './components/registration.component'
import { MainPageComponent } from './components/mainpage.component'
import { CoursesComponent } from './components/courses.component'
import { CourseComponent } from './components/course.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"register", component: RegistrationComponent},
      {path:"main", component: MainPageComponent},
      {path:"courses", component: CoursesComponent},
      {path:"courses/:id", component: CourseComponent},
      {path:"", redirectTo:"/main", pathMatch:'full' },
      {path:"**", redirectTo:"/main", pathMatch:'full' }
    ])],

  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    MainPageComponent,
    CoursesComponent,
    CourseComponent
],
  bootstrap:    [ AppComponent ],

  providers: [
  { provide: LOCALE_ID,
    useValue: "ru-RU" },
]
})

export class AppModule { 
  
}
