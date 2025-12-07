class Car  {
    #brand;
    #model;

    constructor(brand, model){
        this.#brand = brand;
        this.#model = model;
    }

    info(){
        console.log("The brand is ${this.#brand}");
        console.log("The model is ${this.#model}");
    }
}

class ElectricCar extends Car {
    #battery;

    constructor(brand, model, battery){
        super(brand, model);
        this.#battery = battery;
    }
    
    info(){
         super.info();
         console.log("The battery is ${this.#battery}");
    }
}   

const e = new ElectricCar("BMW", "2020", "1000W");
e.info();