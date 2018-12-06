/*class Person {
  protected name: string
  protected constructor (name : string) {
    this.name = name
  }
}

class Employee extends Person{
  private department: string
  constructor (name: string, department: string) {
    super(name)
    this.department = department
  }

  public getPitch () {
    return `Hello my name is ${this.name} and I work in ${this.department}`
  }
}

const e1 = new Employee('abhinav', 'engineering')
//const p1 = new Person('sharma')
console.log(e1.getPitch())

console.log(e1)

class Octopus {
  readonly name: string
  constructor (name: string) {
    this.name = name
  }
}



const passcode = 'secret'

class Person {
  private _fullName: string

  get fullName (): string {
    return this._fullName
  }

  set fullName(name: string) {
    if (passcode === 'secret') {
      this._fullName = name
    } else {
      console.log('error')
    }

  }
}

let p = new Person();

p1.fullName = 'Bob'


class Grid {
  static origin = {x: 0, y: 0}
  constructor (public scale: number) {}

  printOrigin () {
    console.log(Grid.x, Grid.y)
  }
}

let grid = new Grid(5)

abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void;
}

class AccountDepartment extends Department {
  constructor (name: string) {
    super(name)
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: AccountDepartment = new AccountDepartment('acc')
console.log(department.printName())
console.log(department.printMeeting())
console.log(department.generateReports())





 function in typescript


const add: (x: number, y : number) => number = function (x, y) : number {
  return x + y
}

add(2, 2)

function buildName (firstName: string, lastName?: string) {
  return firstName + " " + lastName
}

let result1 = buildName("Bob")
let result2 = buildName("Bob", "Adams")
let result3 = buildName("Bob", "Adams")


*/

/*  enums */



function sample (obj : string | number) {
  if (typeof obj === 'string') {
    console.log(obj.length)
  }
  
}






























