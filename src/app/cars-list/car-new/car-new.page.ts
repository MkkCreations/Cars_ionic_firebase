import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CarService } from 'src/app/car.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.page.html',
  styleUrls: ['./car-new.page.scss'],
})
export class CarNewPage implements OnInit {
  public car!: Car;

  constructor(
    private Car: CarService,
    private toastCtrl: ToastController,
    private router : Router
  ) { }

  ngOnInit() {
    this.car = new Car();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Car enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/cars']);
      }, 2000);
    });
  }

  add() {
    this.Car.saveNewCar(this.car).subscribe(() => {
      this.car = new Car();
      this.presentToast();
    });
  }
}
