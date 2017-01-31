import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CoursesService } from '../services/courses.service'
import { Response } from '@angular/http';
import { Program } from './program';

@Component({
  selector: 'program-comp',
  template: `<h3>Я Программа! {{ currentProgram.title }} <br\> мой id:  {{ id }} </h3>`,
  providers: [CoursesService]
})

export class ProgramComponent {  
  id: string;
  currentProgram: any = {};

  constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService){
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    //this._coursesService.getCourse(this.id).subscribe((course: Response) => { this.currentCourse = course; }) ;
    //this.getCourse(this.id);
    this.getProgram(this.id);
  }

  getProgram(id: number): void {
    
    this._coursesService.getProgram(id)
      .subscribe((program) => {
          //console.log(course.id);
          this.currentProgram = new Program(program);
      });
    
  }

}
