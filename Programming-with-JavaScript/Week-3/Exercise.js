// create your classes here
class User{

    getName(name){
        console.log("Name: ", this.name);
    }
    getRole(role){
        console.log("Role: ", this.role);
    }

}

// Inheritence
class Developer extends User{
    getName(name){
        super.getName(this.name);
    }

    getRole(){
        console.log("Front End Dev");
    }
}

const Devs = new Developer();

Devs.getName("IQSF");
Devs.getRole();


// Iterating Over Objects
function testBracketsDynamicAccess() {
  var dynamicKey;
  if(Math.random() > 0.5) {
    dynamicKey = "speed";
   }else{
     dynamicKey = "color";
   }

    var drone = {
      speed: 15,
      color: "orange"
    }

    console.log(drone[dynamicKey]);
}
testBracketsDynamicAccess();


// Differences between a template and regular string
// variable interpolation:
// expression evaluation.
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`); 

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`); //display both variables using template literals


// For Each

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggies, index) {
    console.log(`${index}. ${veggies}`);
});


// Filter

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
});

// Filter out even
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
a.filter(function(num){
    if (num % 2 == 0){
        console.log(num);
    }
});

// Map

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Sets
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);


// Spread and Rest Operators
const arr1 = [1, 2, 3, 4];
// Spread Operator: Copied arr1 with out modifying it
const spreadArr = [...arr1];
console.log(spreadArr);

// Rest Operator: Just cutted a piece of chuck
const [first, second, ...TopTwo] = arr1;

console.log(arr1);
console.log(TopTwo);


// Join arrays, objects using the rest operator
const fruit = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruit, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// Join Objects
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


// Add new members to array without push
let veggie = ['onion', 'parsley'];
veggie = [...veggie, 'carrot', 'beetroot'];
console.log(veggie);

// convert string to array
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


// Copy object and Array
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)


const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)