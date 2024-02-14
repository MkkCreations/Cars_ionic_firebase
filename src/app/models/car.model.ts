export class Car {
    id?: string;
    brand: string;
    model: string;
    country: string;
    speed: number;
    hp: number;
    torque: number;
    weight: number;
    price: number;
    electric: boolean;
    pictureLink: string;
    releaseDate: string;

    constructor() {
        this.country = '';
        this.model = '';
        this.electric = false;
        this.pictureLink = '';
        this.brand = '';
        this.releaseDate = '';
        this.speed = 0;
        this.hp = 0;
        this.torque = 0;
        this.weight = 0;
        this.price = 0;
    }
}
