console.log("hello world")

let firstName:string = "Yow"
// firstName = 3
console.log(firstName)

let isDone:boolean = true
console.log({isDone})

let age:number = 35
console.log({age})

let list: number[] = [1,2]
let mylist: Array<number> = [1,2]

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;

//---- Enum
enum Color {
  Red,
  Green,
  Blue
}

//---- Unknown
let notSure: unknown
notSure = "maybe a string instead"
notSure = 20
notSure = "john"
console.log(notSure)

// let list: number[] = [1, 2, 3]
// let mylist: Array<number> = [1, 2, 3]
let fname1: string[] = ['John','Joe','Jane']
let fname2: Array<string> = ['John','Joe','Jane']
console.log(list)
console.log(mylist)
console.log(fname1)
console.log(fname2)

//---- Void
// โดยปกติหากสั่งฟังก์ชันแล้วไม่มีการกำหนด return type จะถือเป็น any 
function warnUser(fname:string):void{
  console.log(`Hello ${fname}`)
  // return -5
}
console.log(warnUser('20'))

// declare function createImageBitmap(obj:object | null): null
// ---- Object
declare function create(obj:object | null):void {
  console.log(obj)
}
// create({prop: 0})
// create(null)

// ====================================
// Udemy TypeScript section 26
// ====================================

// example of type inference
const today = new Date();
today.getFullYear() // auto complete method suggestion

class Person {}
const teacher = new Person();

// use type anotation when TypeScript can not predict the value type
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates:{x:number; y:number} =JSON.parse(json) 
// 2) when we declare a variable on one line and initailize it later
// 3) Variable whose type cannot ge inferred correctly
const numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false;

numbers.forEach(element => {
  if (element > 0) numberAboveZero = element;
});

// ====================================
// Udemy TypeScript - Function
// ====================================

// anotate the return value will enforce the logic in the body to retrun number
const add = (a: number,b:number):number => {
  return a + b;
} 
// suggest to anotate the return value - use case when we forgot to return value, we'll get a warning
const subtract = (a: number,b:number):number => {
  a - b;
}

// Not anotate the return value, Typescipt will predict the return value with type interence
const addAgain = (a: number,b:number) => {
  return a + b;
} 

// ====================================
// Udemy TypeScript - Destructuring 
// ====================================

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}
const logWeather = ({
  date, 
  weather
}:{date:Date; 
  weather:string
}):void => {
  console.log(date, weather)
}

// ==========================================
// Udemy TypeScript - Object & Destructuring
// ==========================================
const profile = {
  name: 'alex',
  age: 20,
  coords: {lat:0, lng:15},
  setAge(age:number):void {
    this.age = age;
  }
}

const {age, name}: {age:number; name:string} = profile;
const {
  coords: {lat, lng}
} : {coords: {lat: number; lng:number}} = profile