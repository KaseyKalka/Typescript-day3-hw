// 1. Given the data below, define a type alias for representing users.

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// ANSWER
type User = {
    name: string,
    age: number,
    company?: string
}

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.

// ANSWER
type DaysOfTheWeek = ("Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday")

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName:string, 
        public lastName:string) {}

        // ANSWER
        public get fullName(){
            return `${this.firstName} ${this.lastName}`
        }
}



// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 
// ANSWER
class Employee extends Person {
    salary: number
    constructor(firstName: string, lastName: string, salary: number){
        super(firstName, lastName)
        this.salary = salary
    }
}

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

// ANSWER 
interface Employee {
    name: string,
    salary: number,
    address: object
}

interface address {
    street: string,
    city: string,
    zipCode: number
}