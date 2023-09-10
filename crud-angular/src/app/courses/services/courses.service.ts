import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '../../../assets/db.json';

  constructor(private http: HttpClient) { }

  listCourses() {
    return this.http.get(this.API)
      .pipe(
        first(),
        tap(console.log)
      );

  }
}
