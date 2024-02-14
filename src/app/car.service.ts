import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Car } from './models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private dbPath = '/cars';
  carsRef: AngularFirestoreCollection<Car>;


  constructor(
    private db: AngularFirestore
  ) { 
    this.carsRef = db.collection(this.dbPath);
  }

  getAll() : any {
    return this.carsRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  saveNewCar(car: Car) : any {
    return new Observable(obs => {
      this.carsRef.add({...car}).then(() => {
        obs.next();
      });
    });
  }

  get(id: any):any {
    return  new Observable(obs => {
      this.carsRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(car: Car) {
    return new Observable(obs => {
      this.carsRef.doc(car.id).update(car);
      obs.next();
    });
  }

  delete(id: any) {
    this.db.doc(`cars/${id}`).delete();
  }
}
