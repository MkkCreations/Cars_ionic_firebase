import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsListPage } from './cars-list.page';

describe('FilmsListPage', () => {
  let component: CarsListPage;
  let fixture: ComponentFixture<CarsListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
