import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [ './courses.component.scss' ]
})
export class CoursesComponent {

  displayedColumns: string[] = [ 'name', 'category', 'acoes' ];
  courses$!: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.listCourses()
      .pipe(
        catchError(error => {
          console.error(error);
          return of([]);
        }
        )
      );
  }

  edit(course: Course) {
    console.info('edit ' + course.name);
  }

  delete(course: Course) {
    console.info('delete ' + course.name);
  }

  create() {
    console.info('create a new course');
  }

}
