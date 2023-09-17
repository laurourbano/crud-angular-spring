import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCancelDialogComponent } from './confirm-cancel-dialog.component';

describe('ConfirmCancelDialogComponent', () => {
  let component: ConfirmCancelDialogComponent;
  let fixture: ComponentFixture<ConfirmCancelDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmCancelDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
