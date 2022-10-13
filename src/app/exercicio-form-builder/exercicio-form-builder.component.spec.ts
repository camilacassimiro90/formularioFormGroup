import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioFormBuilderComponent } from './exercicio-form-builder.component';

describe('ExercicioFormBuilderComponent', () => {
  let component: ExercicioFormBuilderComponent;
  let fixture: ComponentFixture<ExercicioFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
