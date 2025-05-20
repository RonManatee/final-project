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
  //(...) allows us to quickly copy all or part of an existing array or object to another array or object
  const numbersOne = [1,2,3];
  const numbersTwo = [4,5,6];
  const numbersCombined = [...numbersOne, ...numbersTwo];
  //spread is often used in combination with destructuring
  const numbers = [1,2,3,4,5,6];
  const [one, two, ...rest] = numbers;
  // can use spread with objects also 
  const myVehicle = {
    brand: 'Ford',
    model: 'Escape',
    color: 'Red'
  }
  const updateMyVehicle = {
    type: 'car',
    year: 2022.
    color: 'yellow'
}
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}


//MODULES
    //EXPORT, allows to export a function or variable from any file
    //IN-LINE Export
    export const name = 'Jesse'
    export const age = 40
    //ALL AT ONCE AT THE BOTTOM
    const name = 'Jesse'
    const age = 40
      export {name, age}

    //DEFAULT EXPORTS, can only have ONE default export in a file
    const message = () => {
      const name = "jesse";
      const age = 40;
      return name + ' is ' + age + ' Years old. ';
    };
        export default message;

    //IMPORT, can import modules into a file in two ways; named or default exports
        //NAMED
          import { name, age} from "./person.js";
        //DEFAULT
          import message from "./message.js";

  //TERNARY OPERATOR
        //Simplified conditional operator like "if/else"
        //Syntax: condition ? <expression if true> : <expression if false>
        function rederApp() {
          document.getElementById('demo').innerHTML = "Welcome!";
        }
          function renderLogin() {
            document.getElementById('demo').innerHTML = "Please log in";
          }
          let authenticated = true; //shows the ternary to be authenticated
          //TERNARY operator makes the above work correctly
          if (authenticated) {
          renderApp();
        }else{
          renderLogin();
        }

        //A SIMPLER METHOD OF TERNARY instead of the "if/else"
        authenticated ? renderApp() : renderLogin();

  //RENDER HTML
      //createRoot() is to define the hHTML element where a React component should be displayed.
      //render() called to define the React component that should be rendered. 
        import React from  'react';
        import ReactDOM from 'react-dom/client';

        const container = document.getElementById('root');
          const root = ReactDOM.createRoot(container);
          root.render(<p>Hello</p>);

      //ANOTHER EXAMPLE
         const myelement = (
            <table>
              <tr>
                <th>Name</th>
              </tr>
              <tr>
                <td>John</td>
                </tr>
              <tr>
                <td>Elsa</td>
                </tr>
            </table>
          );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myelement); // calls back the const from the beginning

      //ROOT NODE is the HTML element where you want to display the result.
        //like a container for content managed by React.
          //does NOT have to be a <div> element and it does NOT have to have the id = 'root'
      import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('sandy');
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);

/*
For this example to work on your project,
you must have a element with
id="sandy" on your "index.html" page.
*/

//PROPS are arguments passed into React components. Props are passed to components via HTML attributes.
//PROPS stand for properties
  // ADD a 'brand' attribute to the Car element
    const MyElement = <Car brand='Ford' />;
          //component receives the arguemtn as a props object;
          //use the brand attriubute in the component;
          function Car(props) {
            return <h2>I am a {props.brand}!</h2>;
          }
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);  //=== 'I am a Ford!

//PASS DATA
  //Props are also how you pass data from one component to antoher, as a parameter
  //Send the 'brand' property from the Garage component to the Car component;
      function Car(props) {
        return <h2>I am a {props.brand}!</h2>;
      }
        function Garage() {
          //const carName = "Ford"; this can be used as a variable instead of a string
          // or if it was an object const carInfo = {name: "ford", model: "mustang" };
          return (
            <>
            <h1>Who lives in my garage?</h1>
              <Car brand="Ford" /> 
                                      //if variable, this would change to <Car brand = {carName} />
                                      //if object <Car brand = {carInfo} />
            </>
            );
        }
const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Garage />);


//EVENTS are writtin in camelCase syntax. React event handlers are written inside curly braces
    function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button> //returns "Great shot" from the alert
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

//PASSING ARGUMENTS, to pass an argument to an event handler, use an arrow function
    <button onClick ={() => shoot("Goal!")}>Take the shot!</button> //returns with Goal upon button click

        
