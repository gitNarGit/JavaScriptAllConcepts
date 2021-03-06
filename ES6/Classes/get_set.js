//Getters and setters are used to get and set a property. They can also be used in Objcts,Constructors
//classes have no properties, so if we want to access them, we can use getters and setters
//alse for example in modular design pattern, we should hide all properties, and we can open access to them through getters and setters
//for example if we have a property which must always be a number, we can hide it, and allow to change throgh serter, and make additional if statements to prevent adding anything besides number
class Cars{
  constructor(){
    this.models = ["audi","bmw"];
  };
  get totalModels(){//get can't accept any parameter.It is used only for retrieving value
    return this.models.length;
  };
}
let cars = new Cars();
console.log(cars.totalModels); // note that get is not requiring ()


let MyModule = (function(){
  let x = 10;
  myObj = {
    get x(){
      return x;
    },
    set x(v){
      if(typeof v === "number"){
        x = v;
      }
    }
  };

  return myObj;
})();
console.log(MyModule.x);
MyModule.x = 30;
console.log(MyModule.x);
//note that get and set use the same name "x".This is called pseud-property
