/** to run this file>> ts-node class.ts */

class Vehicle {
  // hardcoding value
  size: string = 'medium'
  /**
   * use constructor - syntax option 1
   * -------------------------------------------
   * see chapter 26 - 363 Feilds in class
   
    color: string;
    constructor(color: string) {
      this.color = color;
    }
  */
  /**
   * constructor - syntax option 2 (short handed)
   * -------------------------------------------
   * equivelence to syntax option 1
   */
  constructor(public color: string) {}

  protected drive():void { console.log("bruumm")};
  private honk():void{ console.log('beep')};
}
const vehicle2 = new Vehicle('red')

// overidden method on the child class
// error warning - can not change modifier in child class to difference than parent class
class Car extends Vehicle {
  private drive():void { console.log('vrooooom') };
  public startDriving():void { 
    this.drive();
    this.honk()
  };
}

const car = new Car()
car.drive()

// =====================================
// class in TypeScript VS class in ES6
// =====================================
// 1) modifyer -> public - method can be call anywhere anytime
//                private - method can be called by other methods in 'this' class
//                protected - method can be called gy ohter methods in 'this' class or by other method on child class

// =====================================
// Feilds inheritance
// =====================================
class Dwell {
  constructor(public color: string) {}
  protected paint():void {
    console.log('gross')
  }
}

// when we call constructor in child class
// we are required to call consturcor of parents as well
class Home extends Dwell {
  constructor(public cost: number) {
    // refernce to constructor of the parent
    // and it requires to pass a string
    super('red'); // hard coding string
  }
}
const home = new Home(150)

class MobileHome extends Dwell {
  // Feild color belongs to Dwell
  // So, we do not want to assign with any modifier
  constructor(public cost: number, color: string) {
    super(color); 
  }
}
const mobilehome = new MobileHome(100, 'red')
