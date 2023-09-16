import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: [ './course-form.component.scss' ]
})
export class CourseFormComponent {

  form: FormGroup = this.formBuilder.group({
    name: [ '' ],
    category: [ '' ]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  onAdd() {
    console.info(this.form.value);
  }
  
  onCancel() {
    this.router.navigate([ '/courses' ], { relativeTo: this.route });
  }

}
