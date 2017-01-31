import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CoursesService } from '../services/courses.service'
import { Router } from '@angular/router';
import { Program } from './program';

@Component({
  selector: 'programs-comp',
  templateUrl: 'app/templates/programs.component.html',
  styleUrls: ['app/styles/courses.css'],
  providers: [CoursesService]
})


export class ProgramsComponent {
  errorMessage: string;
  ProgramsList: Program[];

  constructor(private _coursesService: CoursesService) { }

  ngOnInit() {
    this.ProgramsList = this.getProgramsList();
  }

  getProgramsList(): Program[] {
    let result: Program[] = [];
    this._coursesService.getProgramsList()
      .subscribe((programslist: Response) => {
        for (let index in programslist) {
          let program = programslist[index];
          result.push(program);
        }
      });
    return result;
  }

}




