import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CCDocentePage } from './ccdocente.page';

describe('CCDocentePage', () => {
  let component: CCDocentePage;
  let fixture: ComponentFixture<CCDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CCDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
