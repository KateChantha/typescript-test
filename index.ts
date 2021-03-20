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