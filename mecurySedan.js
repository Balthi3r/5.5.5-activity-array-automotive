//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
class Car extends VehicleModule{
    constructor(make,model,year,color,milage){
        super(make,model,year,color,milage);
        this.maximumPassengers=5;
        this.passenger=0;
        this.numberOfWheels=4;
        this.maximumSpeed=160;
        this.fuel=10;
        this.scheduleService=False;
    }
}

checkService(){
    if(this.milage>30000){
        this.scheduleService= true
        return this.scheduleService;
    }
}

Start(){
    if(this.fuel>0){
        console.log("car is on")
        return this.started=true
    }else{
        console.log("need fuel")
        return this.started=false;
    }
}
