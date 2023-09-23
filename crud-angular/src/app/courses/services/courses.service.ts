import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/api/courses';

  constructor(private http: HttpClient) { }

  listCourses() {
    return this.http.get(this.API)
      .pipe(
        first(),
        tap(console.table)
      );
  }

  save(record: Partial<Course>) {
    return this.http.post(this.API, record)
      .pipe(
        first(),
        tap(console.table)
      );
  }
}
