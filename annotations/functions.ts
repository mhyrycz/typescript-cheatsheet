const add = (a: number, b: number): number => {
    return a + b
}

console.log(add(2,3))

function divide(a: number,b: number): number {
    return a / b
}

const multiply = function(a: number,b: number): number {
    return a * b
}

const logger = (message: string): void => {
    console.log(message)
}

const newError = (message: string): void => {
    throw new Error(message)
}

// destrcturing

const todaysWeather = {
    date: new Date(),
    weather: "windy"
}

const logWeather = (forecast: {date: Date, weather: string}): string => {
    const date = forecast.date
    const weather = forecast.weather
    return `${date} will be ${weather}`
}

console.log(logWeather(todaysWeather));

const logWeather2 = ({date, weather}: {date: Date, weather: string}): string => {
    return `${date} will be ${weather}`
}

console.log(logWeather2(todaysWeather));
