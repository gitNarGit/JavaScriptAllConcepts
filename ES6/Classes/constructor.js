//class constructor
//Class can have only one constructor.
//constructor is called for creating and initializing an object. That means that it runs only once at the very beginig of object initialization
class Car {
  constructor(brand,model) {
    this.brand = brand;
    this.model = model;
  }
  showCarInfo(){
    console.log("my car is: "+this.brand + " " + this.model);
  }
}
let myNewCar = new Car("BMW","X5");
myNewCar.showCarInfo();
