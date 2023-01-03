//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle

//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make) 

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passgenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num){
        if(this.passenger < this.maxPassengers){
            if((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");
                }

            } else {
                console.log(this.model + " " + this.make + " is full");
            }
        }

    start(){
        if (this.fuel > 0){
            return this.started = true;
            console.log("This car is started");
        } else {
            console.log("no fuel");
            return this.started = false;
        }
    }

    checkService(){
        if(this.mileage > 30000){
            this.scheduleService = true;
            return this.scheduleService
            console.log("It's time to schedule your car to be serviced")
        }
    }

    }


    let myCar = new Car('mercury', 'A28', '2000', 'white', 50000)

    myCar.start()
    myCar.loadPassenger(5)
    myCar.checkService(50000)