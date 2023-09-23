import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmCancelDialogComponent } from 'src/app/shared/components/confirm-cancel-dialog/confirm-cancel-dialog.component';
import { Course } from '../../model/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.scss' ]
})
export class CourseFormComponent {

  form = this.formBuilder.group({
    _id: [ 0 ],
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    category: [ '', [ Validators.required ] ],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: CoursesService,
    private snackBar: MatSnackBar
  ) {
    const course: Course = this.route.snapshot.data[ 'course' ];
    if (course) {
      this.form.setValue(course);
    } else {
      this.form.reset();
    }
  }

  onAdd() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(() => {
        this.snackBar.open('Curso Cadastrado com Sucesso', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.navigateToCourses();
      }, () => {
        this.snackBar.open('Erro ao Cadastrar Curso', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
      );
    }
  }

  onCancel() {
    this.dialog.open(ConfirmCancelDialogComponent).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.snackBar.open('Cancelado', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.navigateToCourses();
      }
    });
  }

  private navigateToCourses() {
    this.router.navigate([ '/courses' ], { relativeTo: this.route });
  }



}
