import greet,{latitude,longitude,subtraction,Person} from "./math.js";


console.log(`The lattitude is ${latitude}`);

let result = subtraction(10,5);
console.log(`The result is ${result}`);

const person1 = new Person('John',30);
person1.getdetails();

console.log(greet('John'));
