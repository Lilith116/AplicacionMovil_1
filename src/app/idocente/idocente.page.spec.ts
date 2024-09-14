import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IDocentePage } from './idocente.page';

describe('IDocentePage', () => {
  let component: IDocentePage;
  let fixture: ComponentFixture<IDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
