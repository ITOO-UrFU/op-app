import { Input, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service'
import { Response } from '@angular/http';
import { Program } from './program';

@Component({
  selector: 'program-comp',
  template: `
  <h3>Программа: "{{ currentProgram.title }}" <br\>  </h3>
  <div><div *ngFor="let module of currentProgram.modules"> <module-comp [idModule]='module'></module-comp></div></div>
  `,
  providers: [CoursesService]
})

export class ProgramComponent {
  id: number;
  currentProgram: any = {};

  constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService) {
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



@Component({
  selector: 'module-comp',
  template: `<div>{{ currentModule.title }}</div>
  <div *ngFor="let idDiscipline of currentModule.disciplines"><discipline-comp [idDiscipline]='idDiscipline'></discipline-comp>
  `
})

export class ModuleComponent {
  @Input() idModule: String;
  currentModule: any = {};


  constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService) {
  }

  ngOnInit() {
    this.getModule(this.idModule);
  }

  getModule(id: String): void {

    this._coursesService.getModule(id)
      .subscribe((module) => {
        //console.log(course.id);
        
        this.currentModule = module;
        
      });

  }
}

@Component({
  selector: 'discipline-comp',
  template: `<div> - {{ currentDiscipline.name }}</div>`
})

export class DisciplineComponent{
  @Input() idDiscipline: Number;
  currentDiscipline: any = {};

  constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService) {
  }
    ngOnInit() {
    this.getDiscipline(this.idDiscipline);
  }
  getDiscipline(id: Number): void {

    this._coursesService.getDiscipline(id)
      .subscribe((module) => {
        //console.log(course.id);
        
        this.currentDiscipline = module;
        console.log(this.currentDiscipline);
      });

  }

}