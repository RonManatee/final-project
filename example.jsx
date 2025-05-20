//this is a basic class type function
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car { {// "extends" creates a class inheritance}
  constructor(name, mod) {
    super(name); {//refers to the parent class, by calling the constructor we get access to the inside the ()}
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}

const mycar = new Model("Ford" , "Escape");
mycar.show();


//ARROW FUNCTIONS
  //BASIC FUNCTION
hello = function() {
  return "Hello World!"
}
  //WITH ARROW FUNCTIONS
hello = () => "Hello World!";
  {// with arrows, you can remove brackets to make things simpler. This works only with ONE statement}

    {// IF you have parameters, you must pass them seperately}
    hello = val => "Hello" + val;

      {//WITH REGULAR FUNCTION, "THIS" REPRESENTS THE OBJECT THAT CALLED THE FUNCTION}
class Header {
  constructor() {
    this.color = "Red";
  }

        //Regular function:
        changeColor = function() {
          document.getElementById("demo").innerHTML += this;
        }
}

const myheader = new Header();
        //The window object calls the function:
      window.addEventListener("load", myheader.changeColor);
        //A button object calls the function:
      document.getElementById("btn").addEventListener("click", myheader.changeColor);


//SECOND FUNCTION

class Header{
  constructor() {
    this.color= "Red";
  }
  //ARROW FUNCTION
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}
const myheader = new Header();
        //the window object calls the function:
    window.addEventListener("load", myheader.changeColor);
        //A button ojbect calls the function:
    documnet.getElementById("btn").addEventListener("click", myheader.changeColor);


//VARIABLES (VAR, LET, AND CONST)
//if you use var outside a function, it belongs to the global scope.
//if you use var inside a function, it belongs to that function.
//if you use var inside a block, i.e. for loop, the variable is still available outside of that block. var has a function scope, not block scope.

//let is the block scoped version of var, and is limited to the block(expression) where it is defined.
//if you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.let has a block scope.
//const is a variable that once it has been created, ist value can never change, const has a block scope.
//YOU CANNOT reasign a value, array or ojbect made with const.
//YOU CAN change the elements of an const array, and change the properties of const object.

//ARRAY METHODS
//.map() is most useful in React. allows you to run a function on each item in the array, returning a new array as the result. 
// can be used to generate lists.
      const myArray = ['apple', 'banana', 'orange'];
        const mylist = myArray.map((item) => <p>{item}</p>

//DESCTRUCTURING
//used to take certain items contained inside an array or object.
   //OLD WAY
   const vehicle = ['mustang', 'f-150', 'expedition'];
        const car = vehicles[0];
        const truck = vehicles[1];
        const suv = [2];

  //NEW WAY
    const vehicle = ['mustang', 'f-150', 'expedtion'];
        const [car, truck, suv] = vehicles;
      // if we only want the car and suv, leave out the truck but keep the comma.
        const [car,, suv] = vehicles;

  // Destructuring with an array
  function calculate(a,b) {
    const add = a+b;
    const subtract = a-b;
    const multiply = a*b;
    const divide = a/b;
      return [add, subtract, mulitply, divide];
  }
        const [add, subtract,muliply,divide] = calculate(4,7);

          //document.write("<p>Sum: " + add + "</p>"); 11
          //document.write(<p>Difference: " + subtract + "</p>"); -3
          //document.write(<p>Product: " + multiply + "</p>"); 28
          //document.write(<p>Quotient: " + divide + "</p>"); .5714285714285714

//Old way of Destrcuturing Objects
    const vehicleOne = {
      brand: 'Ford',
      model: 'Mustang',
      type: 'car',
      year: 2021,
      color: 'red'
    }

  myVehicle(vehicleOne);
        //Old way
      function myVehicle(vehicle) {
        const message = 'my ' + vehicle.type + 'is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';

//NEW WAY
  myVehicle(vehicleOne);
        function myVehicle({type, color, brand, model}) {
          const message = 'My ' + type + 'is a ' + color + ' ' + brand + ' ' + model + '.';

//Objects do not need to be in order
  const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';


//SPREAD OPERATOR
        
