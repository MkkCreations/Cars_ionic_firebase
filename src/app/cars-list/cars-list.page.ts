import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
  cars!: Array<Car>;

  constructor(
    private Car: CarService
  ) { }

  ngOnInit() {
    this.Car.getAll().subscribe((data: any) => {
      this.cars = data;
    });
  }

}
