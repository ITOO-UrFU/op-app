import { Input, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service'
import { Response } from '@angular/http';
import { Program } from './program';

@Component({
  selector: 'program-comp',
  template: `
  <h3>Программа: "{{ currentProgram.title }}" <br\>  </h3>
  <div><div *ngFor="let module of currentProgram.modules"> <module-comp [idModule]='module'> Загрузка... </module-comp></div></div>
  <hr />
  <div *ngFor="let idEPT of currentProgram.educational_program_trajectories"><module-list-comp [idModuleList]='idEPT'></module-list-comp></div>
  <hr />
  <div *ngFor="let idcmp of currentProgram.cmp"><module-list-choice-comp [idChoiceModuleList]='idcmp'></module-list-choice-comp></div>
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
        console.log(this.currentProgram)
      });

  }
}

@Component({
  selector: 'module-list-comp',
  template: `<div *ngIf="currentModuleList">
  <h4>{{currentModuleList.title}}</h4>
  <div *ngFor="let module of currentModuleList.modules"> <module-comp [idModule]='module'> Загрузка... </module-comp></div></div>
  `
})
export class ModuleListComponent{
@Input() idModuleList: string;
currentModuleList:any;
constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService) {
}
  ngOnInit() {
    this.getModuleList(this.idModuleList);
  }
  getModuleList(id: String): void{

    this._coursesService.getElementOld("educationalprogramtrajectoriespools", id)
      .subscribe((moduleList) => {
        this.currentModuleList = moduleList;
        console.log(this.currentModuleList)
      });

  }
}

@Component({
  selector: 'module-list-choice-comp',
  template: `<div *ngIf="currentChoiceModuleList">
  <h4>{{currentChoiceModuleList.title}}</h4>
  <div *ngFor="let module of currentChoiceModuleList.modules"> <module-comp [idModule]='module'> Загрузка... </module-comp></div></div>
  `
})
export class ChoiceModuleListComponent{
@Input() idChoiceModuleList: string;
currentChoiceModuleList:any;
constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService) {
}
  ngOnInit() {
    this.getChoiceModuleList(this.idChoiceModuleList);
  }
  getChoiceModuleList(id: String): void{

    this._coursesService.getElement("cells", id)
      .subscribe((moduleList) => {
        this.currentChoiceModuleList = moduleList;
        console.log(this.currentChoiceModuleList)
      });

  }
}


@Component({
  selector: 'module-comp',
  template: `<div>{{ currentModule.title }}</div>
  <div *ngFor="let idDiscipline of currentModule.disciplines"><discipline-comp [idDiscipline]='idDiscipline'> Загрузка... </discipline-comp>
  
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
       // console.log(this.currentModule)
      });

  }
}

@Component({
  selector: 'discipline-comp',
  template: `<div>- {{ currentDiscipline.title }}, {{ currentDiscipline.points }} з.е.</div>`
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

    this._coursesService.getElement('disciplines', id)
      .subscribe((module) => {
        this.currentDiscipline = module;
        console.log(this.currentDiscipline);
      });

  }

}