interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

interface ReportFix {
  broken: boolean
}

const oldHonda = {
  name: 'civic',
  broken: false
}

const oldMBW = {
  name: 'BMW',
  broken: false
}

// must pass in the object that have property name and type as Vehicle
const printVehicle = (vehicle: Vehicle):void => {
  console.log(vehicle.broken)
}
// oldHonda doesn't satisty Vehicle type interface
printVehicle(oldHonda)

const shouldReportFix = (vehicle: ReportFix):void => {
  console.log(vehicle.broken)
}
// both satisfy RoportFix type interface
shouldReportFix(oldHonda);
shouldReportFix(oldMBW);