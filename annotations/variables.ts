//Course examples

// When to use annotation
// 1) When functionn returns 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y:20}
// 2) When we declare variable in one line and initialize it's value later.
const array = [ 'red', 'green', 'black' ];
let foundColor: boolean;
foundColor = array.find((x) => x === 'green').length > 0;
console.log(foundColor);
// 3) Variable whose type can't be inferred correctly
let numbers = [ -10, 1, -12 ];
let numbersAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) {
		numbersAboveZero = numbers[i];
	}
}
console.log(numbersAboveZero);

//MY test

interface parsedJson {
	x: number;
	y: number;
}

const myParse: (text: string) => parsedJson = (text: string) => {
	const parsed = JSON.parse(text);
	return parsed;
};

console.log(myParse('{"x": 10, "y": 20}'));
