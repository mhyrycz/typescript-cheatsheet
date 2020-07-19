const carMakers: string[] = ["Toyota", "Vw", "Chevy", "Peugeot"]

const days: Date[] = [new Date(), new Date()]

const carMakersByCars: (string[] | number[])[] = [
    ["Corolla"],
    ["Golf"],
    ["F150"],
    [308]
]
// Help with inference when extracting value
const toyota = carMakers[0]

const peugeot308 = carMakersByCars[3]

// Prevent incompatible values
// carMakers.push(100)


// helps with map
carMakers.map((maker: string): number => {
    return maker.length
})


const importantDate = ["2020-08-08", new Date()]
// importantDate.push(100) - it won't work becaue of type inference





