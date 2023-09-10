import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '../../../assets/dba.json';

  constructor(private http: HttpClient) { }

  listCourses() {
    return this.http.get(this.API)
      .pipe(
        first(),
        // delay(3000),
        tap(console.log)
      );

  }
}
