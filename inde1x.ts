/*let isDone: boolean = true
let list:number[] = [1,2,3]
list = ['1',2,3]


let x: [string, number];

x = ["1", 2]

console.log(x[0].substr(1));
console.log(x[1].substr(1));

x[2] = "abc"
x[3] = false

enum Color {RED=3, GREEN, YELLOW}
let c:Color = Color.RED;

let greenColor:string = Color[4]

// not sure about the type

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

notSure.ifitexits()
let randomlist: any[] = [1, true, "free"];

randomlist[1] = {}

function warnUser():void {
  console.log("This is my warning message");
}

let voidVar: void = null;

function neverEnding():void {
  while(true) {

  }
}

declare function create1(o: object | null): void;

function create1 () {
  console.log('this is my function')
}

create1({ prop: 0 });
create1(null);
create1(42)

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;


interface Foo {
  bar: number;
  bas: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';

// interface for function arguments
interface labelledValue {
  label: string
}

function printLabel (labelObj: labelledValue) {
  //console.log(labelObj.size)
}

let objParam = {size: 10, label: 'abhinav'}

printLabel(objParam)

// optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare (config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: "white", area: 1000}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

createSquare({color: 'black'})


// readonly properties

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x:10, y:20}
p1.x = 23;


// readonly arrays

let a: number[] = [1,2,3,4]

let ro: ReadonlyArray<number> = a

ro[0] = 1
ro.push(5)
ro.length = 100

let b: number[] = ro
let c: number[] = ro as number[]

// extra arguments
interface squareConfigExtra {
  color?: string;
  width?: number;
  [propName: string]: any
}

function createSquare1 (config: squareConfigExtra): {color: string, area: number} {
  let newSquare = {color: "white", area: 100};

  return newSquare;
}

createSquare1({colour: 'red', width: 2000})


// function types

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc;

mySearch = function (src: string, sub: string) {
  return src.search(sub) > -1
}

mySearch('abhinav', 'abc')


// indexable types

interface StringArray {
  [index: number] : string
}

let myArray: StringArray
myArray = ['1','2']
myArray = [1, 2]

let myStr: string = myArray[0]


class Animal {
  name: string
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

interface NumberDictionary {
  length: number;    // ok, length is a number
  name: string;      // error, the type of 'name' is not a subtype of the indexer
  [index: string]: number;
}

let a1: Okay;

a1 = { name: new Animal(), 1: new Dog() }


// readonly array
interface ReadonlyStringArray {
  readonly [index: number]: (string | number);
}

let roA: ReadonlyStringArray = ['1', '2', 3];
roA[1] = '3'

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(h: number, m: number) { }
  setTime(date: Date) {
    this.currentTime = date;
  }
}

interface ClockConstructor {
  //new (hour: number, minute: number): void;
}

class Clock1 implements ClockConstructor {
  currentTime: Date;
  constructor(h: number, m: number) { }
}

interface ClockConstructor {
  new (hour: number, minutes: number): Clock1Interface
}

interface Clock1Interface {
  tick(): void;
}

function createClock (ctor: ClockConstructor, hour: number, minutes: number): Clock1Interface {
  return new ctor(hour, minutes);
}

class DigitalClock implements Clock1Interface {
  constructor(m: number, minutes: number) { }
  tick() {
      return "abc"
  }
}

class AnalogClock implements Clock1Interface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {} as Square;

square.color = '1'
square.sideLength = 4

let cone: Shape = {} as Square;
cone.color = 'blue'
cone.sideLength = 12

interface PenStroke {
  penWidth: number;
}

interface Square1 extends Shape, PenStroke {
  sideLength: number;
}

let newsquare1: Square1 = {} as Square1
newsquare1.penWidth = 12
newsquare1.color = 'red'
newsquare1.y = 3
newsquare1.sideLength = 12

interface Counter {
  (start: number): string
}

let func:Counter = function ():string {return '1'}
func(2)


/*
  mix types
*/

/*
  interface extending classess
*/



/**
 *
 * Classes
 *
 */


class Greeter {
  greeter: string
  constructor(message: string) {
   this.greeter = message
  }

  greet () {
    return `Hello, ${this.greeter}`
  }
}

let greet1 = new Greeter('1')
greet1.greet()

/**
 * class inheritance
 */


class Ani {
 propertyOfClass: string
 constructor (prop: string) {
   this.propertyOfClass = prop
 }
 move(distanceInMeters: number = 0) {
   console.log(`Animal moved ${distanceInMeters}m.`);
 }
}

class Dog1 extends Ani {
  bark () {
   console.log('bark')
  }
}

const dog = new Dog1('2')
dog.bark()
dog.move(10)
dog.bark()
dog.propertyOfClass;



class Animal1 {
  name: string
  constructor (theName: string) {
    this.name = theName
  }
  move (distanceInMeters: number = 0) {
   console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal1 {
  constructor (name: string) {
   super(name)
  }
  move(distanceInMeters = 5) {
   super.move(distanceInMeters)
  }
}

class Horse extends Animal1 {
 constructor (name: string) {
   super(name);
 }
 move (distanceInMeter = 45) {
   console.log('horse')
   super.move(distanceInMeter)
 }
}

let py: Animal1 = new Horse('zaby');

 /**
 * class inheritance
 */

 /**
  * access modifiers
  */

  class Person {
    private name: string
    constructor (theName: string) {
     this.name = theName
    }
  }

  let person1 = new Person('abhinav')
  //person1.name

  class AnimalSpeciee {
    private name: string
    constructor(theName: string) {
     this.name = theName
    }
  }

  class Rhino extends AnimalSpeciee {
    constructor () {
      super('Rhino')
      this.name
    }
  }

  class EmployeeC {
   private name: string
   constructor(theName: string) { this.name = theName; }
  }

 let animal = new AnimalSpeciee("Goat");
 let rhino = new Rhino();
 let employee = new EmployeeC("Bob");

 animal = rhino
 animal = employee
 rhino = animal


/****
* protected
*/

class Per {
 protected name: string
 constructor(empName: string) {
   this.name = empName
 }
}

class Emp extends Per {
 private departmentName: string

 constructor (name: string, department: string) {
   super(name)
   this.departmentName = department
 }

 getElevatorPitch () {
   return `Hello, my name is ${this.name} and i works in ${this.departmentName}`
 }
}

let howard = new Emp("Howard", "Sales");
howard.getElevatorPitch()
howard.name

/****
* protected
*/


/****
* protected Constructor class can be extended but can't be instanciated
*/

class ProtectedPerson {
 protected name: string
 protected constructor (name: string) {
   this.name = name
 }
}

class Employee12 extends  ProtectedPerson{
 private department: string

 constructor(name: string, department: string) {
   super(name);
   this.department = department;
 }
 public getElevatorPitch() {
   return `Hello, my name is ${this.name} and I work in ${this.department}.`;
}
}

let personInTown = new Employee12('abhinav', 'engineering')


/****
* protected Constructor
*/


/**
 * readonly modifier
 */
class Octopus {
 readonly name: string
 readonly numberOfLegs: number = 8

 constructor (name: string) {
   this.name = name
 }

 setName (name: string) {
   this.name = name
 }
}

let oct1 = new Octopus('oct1')
//oct1.name = 2
console.log(oct1.numberOfLegs)


*/



