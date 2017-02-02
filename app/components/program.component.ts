import { Input, Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service'
import { Response } from '@angular/http';
import { Program } from './program';

@Component({
  selector: 'program-comp',
  template: `<div class="article">
  <div  class = "ui masthead vertical segment">
  <h1  class="ui  header">Программа: "{{ currentProgram.title }}"  </h1>
  </div>
  
<div class="ui top attached tabular menu">
  <a class="item active" data-tab="first">Обязательные модули</a>
  <a class="item" data-tab="second">Траектория образователной программы</a>
  <a class="item" data-tab="third">Модули по выбору</a>
  <a class="item" data-tab="four">Майноры</a>
</div>
<div class="ui bottom attached active tab segment" data-tab="first">
    <h3>Обязательные модули</h3>
    <div class="ui styled accordion">
    <div  *ngFor="let module of currentProgram.modules"><module-comp [idModule]='module'> Загрузка... </module-comp></div>
    </div>
</div>   
<div class="ui bottom attached tab segment" data-tab="second">  
    <h3>Траектория образователной программы</h3>
    
    <div class="ui styled accordion">
      <div *ngFor="let idEPT of currentProgram.educational_program_trajectories"><module-list-comp [idModuleList]='idEPT'></module-list-comp></div>
    </div>
</div> 
 <div class="ui bottom attached tab segment" data-tab="third">     
      <h3>Модули по выбору</h3>
      <div *ngFor="let idcmp of currentProgram.cmp"><module-list-choice-comp [idChoiceModuleList]='idcmp'></module-list-choice-comp></div>
</div> 
<div class="ui bottom attached tab segment" data-tab="four">   
  <h3>Майноры</h3>
  </div>
</div>
  `,
  providers: [CoursesService]
})

export class ProgramComponent  {
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

  
    <div class="title ">
   {{currentModuleList.title}}
    </div>
  <div class="content">
  
  <div class="accordion">
  <div *ngFor="let module of currentModuleList.modules"> <module-comp [idModule]='module'> Загрузка... </module-comp></div></div></div></div>
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
        //console.log(this.currentModuleList)
      });

  }
}

@Component({
  selector: 'module-list-choice-comp',
  template: `<div *ngIf="currentChoiceModuleList">
  <br />
  <h4>{{ currentChoiceModuleList.title }}</h4>
  
  <p>Модули:</p>
  <div class="ui styled accordion">
  <div *ngFor="let module of currentChoiceModuleList.modules"> <module-comp [idModule]='module'> Загрузка... </module-comp></div>
  </div>
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
  template: ` <div class="title">
  <i class="dropdown icon"></i> {{ currentModule.title }}
  </div>
  <div class="content">
  Дисциплины:
  <div class="accordion">
  
  <div *ngFor="let idDiscipline of currentModule.disciplines"><discipline-comp [idDiscipline]='idDiscipline'> Загрузка... </discipline-comp> 
  </div>
  </div>
  </div>`
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
  template: `<div class="title"><i class="dropdown icon"></i> {{ currentDiscipline.title }}, {{ currentDiscipline.points }} з.е.</div>
   <div class="content">
              Онлайн-курсов для освоения данной дисциплины не обнаружено...
          </div>`
})

export class DisciplineComponent implements AfterViewInit{
  @Input() idDiscipline: Number;
  currentDiscipline: any = {};

  constructor(private activateRoute: ActivatedRoute, private _coursesService: CoursesService) {
  }
    ngOnInit() {
    this.getDiscipline(this.idDiscipline);
  }

    ngAfterViewInit() {
      $('.ui.accordion').accordion('refresh');
      $('.menu .item').tab()
;
  }

  getDiscipline(id: Number): void {

    this._coursesService.getElement('disciplines', id)
      .subscribe((module) => {
        this.currentDiscipline = module;
        //console.log(this.currentDiscipline);
       
      });

  }

}