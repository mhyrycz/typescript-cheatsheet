interface Car {
    model: string;
    year: number;
    broken: boolean;
}

interface Report {
    summary(): string
}

const oldCar = {
    model: "golf",
    year: 2003,
    broken: false,
    summary(): string {
        return `Model: ${this.model}`
    }
}


//destructurinng doesnn't work here for object function. It returns this.name as undefined
const printVehicle = ({model, year, broken}: Car): void => {
    console.log(`model: ${model}, year:${year}, broken?: ${broken}`)
}

printVehicle(oldCar)


const cola = {
    color: "brown",
    sugar: 40,
    carbonized: true,
    summary(): string {
        return `Color: ${this.color}`
    }
}

const printSummary = (item: Report): void => {
    console.log(item.summary())
}

printSummary(oldCar)
printSummary(cola)


