import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReactiveFormComponent } from './edit-reactive-form.component';

describe('EditReactiveFormComponent', () => {
  let component: EditReactiveFormComponent;
  let fixture: ComponentFixture<EditReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
