class Vehicle {
	wheels: number;
    type: string;
    color: string;

    //two ways of passing values to initialize and declare variables in typescript
    constructor(color: string, public broken: boolean){
        this.color = color
    }

	summary(): void {
		console.log(`My ${this.type} has ${this.wheels} wheels and it is ${this.broken ? "" : "not"} broken.`);
	}
}

class Car extends Vehicle {
	constructor(color: string, broken: boolean) {
		super(color, broken);
		this.wheels = 4;
		this.type = 'Car';
    }
    
    isItGrey():boolean {
        return this.color === "grey"
    }
}

class Bicycle extends Vehicle {
	constructor(color: string, broken: boolean, wheels: number) {
		super(color, broken);
		this.wheels = wheels
		this.type = 'Bicycle';
	}
}

const myBike = new Bicycle("green", true, 2);

const myCar = new Car("grey", false);

myBike.summary();

myCar.summary();

console.log(myCar.isItGrey());
