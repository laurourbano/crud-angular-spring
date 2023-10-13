import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { DeleteCancelDialogComponent } from 'src/app/shared/components/delete-cancel-dialog/delete-cancel-dialog.component';
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
    public route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh()
  }

  refresh() {
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
    this.dialog.open(DeleteCancelDialogComponent).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.coursesService.remove(Number(course._id)).subscribe(() => {
          this.snackBar.open('Curso excluído com sucesso!', 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
          this.refresh();
        }, () => {
          this.onError('Erro ao excluir curso.')
        }
        );
      }
    });
  }

  onAdd() {
    this.router.navigate([ 'new' ], { relativeTo: this.route });
  }

  onCancel() {
    this.dialog.open(DeleteCancelDialogComponent).afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) {
        this.snackBar.open('Cancelado', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    });
  }

}
