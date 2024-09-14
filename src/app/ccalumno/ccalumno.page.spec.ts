import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CCAlumnoPage } from './ccalumno.page';

describe('CCAlumnoPage', () => {
  let component: CCAlumnoPage;
  let fixture: ComponentFixture<CCAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CCAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
