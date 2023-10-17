import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmCancelDialogComponent } from 'src/app/shared/components/confirm-cancel-dialog/confirm-cancel-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Course } from '../../model/course';
import { Lesson } from '../../model/lesson';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.scss' ]
})
export class CourseFormComponent {

  form!: FormGroup;


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private service: CoursesService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    const course: Course = this.route.snapshot.data[ 'course' ];
    this.form = this.formBuilder.group({
      _id: [ course._id ],
      name: [ course.name, [ Validators.required, Validators.minLength(3) ] ],
      category: [ course.category, [ Validators.required ] ],
      lessons: this.formBuilder.array(this.retrieveLessons(course), Validators.required)
    });

  }

  private retrieveLessons(course: Course) {
    const lessons = []
    if (course?.lessons) {
      course.lessons.forEach(lesson => lessons.push(this.createLesson(lesson)));
    } else {
      lessons.push(this.createLesson())
    }
    return lessons;
  }

  private createLesson(lesson: Lesson = { _id: '', name: '', youtubeUrl: '' }) {
    return this.formBuilder.group({
      _id: [ lesson._id ],
      name: [ lesson.name, Validators.required, Validators.minLength(3), Validators.maxLength(100) ],
      youtubeUrl: [ lesson.youtubeUrl, Validators.required, Validators.minLength(10), Validators.maxLength(11) ]
    });
  }

  getLessonsFormArray() {
    return (<UntypedFormArray>this.form.get('lessons')).controls;
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(() => {
        this.snackBar.open('Curso salvo com sucesso', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
        this.navigateToCourses();
      }, () => {
        this.onError('Erro ao salvar curso.');
      }
      );
    } else {
      this.onError(!this.form.controls[ 'name' ].errors || this.form.controls[ 'category' ].errors || this.form.controls[ 'lessons' ]?.errors ? 'Campos obrigatórios' : 'Erro ao salvar curso.');
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

  addLesson() {
    const lessons = this.form.get('lessons') as UntypedFormArray;
    lessons.push(this.createLesson());
  }

  removeLesson(index: number) {
    const lessons = this.form.get('lessons') as UntypedFormArray;
    lessons.removeAt(index);
  }

}
