import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import { Course } from "./../components/course";
import { Program } from "./../components/program";

@Injectable()
export class CoursesService {

  constructor (private http: Http) {}

  private _CoursesListLink = 'http://openedu.urfu.ru:33011/api/v1/courses/?format=json';
  private _CourseLink = 'http://openedu.urfu.ru:33011/api/v1/courses/?format=json&id=';

  private _ProgramsListLink = 'http://openedu.urfu.ru:33011/api/v1/programs/?format=json';
  private _ProgramLink = 'http://openedu.urfu.ru:33011/api/v1/programs/';

  getCoursesList() {
     return this.http.get(this._CoursesListLink)
                       .map(res => <Course[]> res.json())
                       .catch(this.handleError);
   }

   getCourse(id: number){
     return this.http.get(this._CourseLink + id)
                       .map(res => <any> res.json())
                       .catch(this.handleError);
   }

   getProgramsList(){
      return this.http.get(this._ProgramsListLink)
                       .map(res => <Program[]> res.json())
                       .catch(this.handleError);
   }

   getProgram(id: number){
     return this.http.get(this._ProgramLink + id + '/?format=json')
                       .map(res => <any> res.json())
                       .catch(this.handleError);
   }
  private handleError (error: Response) {
    //in a real world app, we may send the error to some remote logging infrastructure
    //instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
}
}
