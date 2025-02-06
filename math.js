

export const latitude = 28.7041;
export const longitude = 77.1025;


export function getdistancefromlatlong(latitude,longitude){
    return latitude*longitude;
}

export function subtraction(num1,num2){
    return num1-num2;
}

export class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }


    getdetails(){
        console.log(`Hi! My name is ${this.name} and I am ${this.age} years old`);
    }
}

export default function greet (name){
    return `Hi! ${name}`;
}


