class ArrayAnything<TypeOfData> {
	constructor(public collection: TypeOfData[]) {}

	get(index: number): TypeOfData {
		return this.collection[index];
	}
}

const stringArray = new ArrayAnything<string>([ 'a', 'b', 'c' ]);

// type inference by generics
const numberArray = new ArrayAnything([ 1, 2, 3 ]);

stringArray.get(2);

// generic functions

function printAnything<T>(collection: T[]): void {
	for (let element in collection) {
		console.log(element);
	}
}

//type annotation
printAnything<string>([ 'a', 'b', 'c' ]);

// type inference
printAnything([ 1, 2, 3 ]);

//generic constraint

class Car2 {
	print(): void {
		console.log('this is a car');
	}
}

class House2 {
	print(): void {
		console.log('this is a house');
	}
}

interface Printable {
	print(): void;
}

function printAnything2<T extends Printable>(collection: T[]): void {
	for (let element in collection) {
		console.log(element);
	}
}

//type annotation
printAnything2<Car2>([ new Car2(), new Car2() ]);

// type inference
printAnything2([ new House2(), new House2() ]);
