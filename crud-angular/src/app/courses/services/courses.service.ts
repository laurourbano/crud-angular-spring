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
        tap(console.log)
      );

  }

  loadById(id: number) {
    return this.http.get<Course>(`${ this.API }/${ id }`)
      .pipe(
        first(),
        tap(console.log)
      );
  }

  save(record: Partial<Course>) {
    console.log(record)
    if (record._id) {
      console.log('update')
      return this.update(record);
    }
    console.log('create')
    return this.create(record);
  }

  private create(record: Partial<Course>) {
    return this.http.post<Course>(this.API, record)
      .pipe(
        first(),
        tap(console.log)
      );
  }

  private update(record: Partial<Course>) {
    return this.http.put<Course>(`${ this.API }/${ record._id }`, record)
      .pipe(
        first(),
        tap(console.log)
      );
  }
}
