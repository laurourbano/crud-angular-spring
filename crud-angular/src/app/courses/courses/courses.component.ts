import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [ './courses.component.scss' ]
})
export class CoursesComponent {

  displayedColumns: string[] = [ 'name', 'category', 'acoes' ];
  dataSource = new MatTableDataSource<Course>([]);

  constructor() {
    this.dataSource.data = [
      { _id: 1, name: 'Angular: CLI', category: 'Angular' },
      { _id: 2, name: 'Angular: Forms', category: 'Angular' },
      { _id: 3, name: 'Angular: HTTP', category: 'Angular' },
      { _id: 4, name: 'Angular: Router', category: 'Angular' },
    ];
  }

  edit(course: Course) {
    console.log(course);
  }

  delete(course: Course) {
    console.log(course);
  }

  create() {
    console.log('create');
  }

}
