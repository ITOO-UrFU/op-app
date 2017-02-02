import { RouterModule } from '@angular/router'
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header.component';
import { RegistrationComponent } from './components/registration.component';
import { MainPageComponent } from './components/mainpage.component';
import { CoursesComponent } from './components/courses.component';
import { CourseComponent } from './components/course.component';

import { ProgramsComponent } from './components/programs.component';
import { ProgramComponent, ModuleListComponent, ChoiceModuleListComponent, ModuleComponent, DisciplineComponent, OneCourseComponent } from './components/program.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"register", component: RegistrationComponent},
      {path:"main", component: MainPageComponent},
      {path:"courses", component: CoursesComponent},
      {path:"programs", component: ProgramsComponent},
      {path:"courses/:id", component: CourseComponent},
      {path:"programs/:id", component: ProgramComponent},
      {path:"", redirectTo:"/main", pathMatch:'full' },
      {path:"**", redirectTo:"/main", pathMatch:'full' }
    ])],

  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    MainPageComponent,
    CoursesComponent,
    CourseComponent,
    ProgramsComponent,
    ProgramComponent,
    ModuleListComponent,
    ChoiceModuleListComponent,
    ModuleComponent,
    DisciplineComponent,
    OneCourseComponent
],
  bootstrap:    [ AppComponent ],

  providers: [
  { provide: LOCALE_ID,
    useValue: "ru-RU" },
]
})

export class AppModule { 
  
}
