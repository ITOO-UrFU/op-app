import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CoursesService } from '../services/courses.service'
import { Response } from '@angular/http';
import { Course } from './course';

@Component({
  selector: 'course-comp',
  template: `<h3 *ngIf="currentCourse">Я курс! {{ currentCourse.title }} <br\> мой id:  {{ id }} </h3>`,
  providers: [CoursesService]
})

export class CourseComponent {  
  id: number;
  currentCourse: Course;

  constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService){
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    //this._coursesService.getCourse(this.id).subscribe((course: Response) => { this.currentCourse = course; }) ;
    //this.getCourse(this.id);
    this.getCourse(this.id);
  }

  getCourse(id: number): void {
    
    this._coursesService.getCourse(id)
      .subscribe((course) => {
          //console.log(course.id);
          this.currentCourse = course;
      });
    
  }

}
