// warning - Could not find a declaration file for module 'faker'
// fix by install Type definition file @types/faker
// use cmd + click on faker to see .d.ts file
import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // convert to number
      lng: parseFloat(faker.address.longitude()),
    }
  }
}

export class Company {
  name: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lng: parseFloat(faker.address.longitude()),
    }
  }
}

// Instruction to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
}

// use Interface as a gate keeper of source to a method
// User and Company has to satisfy interface Mappble to be able to be an argument in addMaker method
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) { 
    //....
  }
  addMaker(mappable: Mappable):void {
    new this.google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  }
}

const user = new User();
const company = new Company();
const custommap = new CustomMap('map');
// ======= Implicit Type Check =======
// user and company are correctly implement to satisty an interface Mappable
custommap.addMaker(user);
custommap.addMaker(company);