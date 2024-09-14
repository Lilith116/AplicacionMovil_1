import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IAlumnoPage } from './ialumno.page';

describe('IAlumnoPage', () => {
  let component: IAlumnoPage;
  let fixture: ComponentFixture<IAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
