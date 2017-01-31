import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { Response } from '@angular/http';
import { CoursesService } from '../services/courses.service'
import {Router} from '@angular/router';

@Component({
  selector: 'courses-comp',
  templateUrl: 'app/templates/courses.component.html',
  styleUrls: ['app/styles/courses.css'],
  providers: [CoursesService]
})



export class CoursesComponent implements OnInit {

  errorMessage: string;
  CoursesList: Course[];

  constructor(private router: Router, private _coursesService: CoursesService) { }

  ngOnInit() {
    this.CoursesList = this.getCoursesList();
  }

  getCoursesList(): Course[] {
    let result: Course[] = [];
    this._coursesService.getCoursesList()
      .subscribe((courseslist: Response) => {
        for (let index in courseslist) {
          let course = courseslist[index];
          if (course.image == null) {
            course.image = "https://openedu.urfu.ru/files/img/course-image-3.jpg";
          }
          else {
            course.image = "http://openedu.urfu.ru:33011" + course.image;
          }

          if (course.start_date == null) {
            course.start_date = 'Неизвестно';
          }
          else {
            var startDate = new Date(course.start_date);
            var timeDiff = Math.abs(new Date().getTime() - startDate.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            course.start_date = startDate.toLocaleDateString('ru', { year: 'numeric', month: 'long', day: 'numeric' })

            if (diffDays < 50) {
              course.start_date = 'Осталось дней: ' + diffDays;
            }
          }
          result.push(course);
        }
      });
    return result;
  }

  onSelect(selected: Course) {
    this.router.navigate(["courses", selected.id]);
  }

}
