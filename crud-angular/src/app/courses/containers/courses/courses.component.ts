import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [ './courses.component.scss' ]
})
export class CoursesComponent {

  displayedColumns: string[] = [ 'name', 'category', 'acoes' ];
  courses$!: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.courses$ = this.coursesService.listCourses()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
          return of([]);
        }
        )
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onEdit(course: Course) {
    this.router.navigate([ 'edit', course._id ], { relativeTo: this.route });
  }

  onDelete(course: Course) {
    console.info('delete ' + course.name);
  }

  onAdd() {
    this.router.navigate([ 'new' ], { relativeTo: this.route });
  }

}
