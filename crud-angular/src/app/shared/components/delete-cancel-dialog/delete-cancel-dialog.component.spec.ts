import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCancelDialogComponent } from './delete-cancel-dialog.component';

describe('DeleteCancelDialogComponent', () => {
  let component: DeleteCancelDialogComponent;
  let fixture: ComponentFixture<DeleteCancelDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteCancelDialogComponent]
    });
    fixture = TestBed.createComponent(DeleteCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
