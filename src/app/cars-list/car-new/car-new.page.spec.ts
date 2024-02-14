import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarNewPage } from './car-new.page';

describe('CarNewPage', () => {
  let component: CarNewPage;
  let fixture: ComponentFixture<CarNewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CarNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
