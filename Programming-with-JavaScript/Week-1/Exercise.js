// Exericse  Declaring Varaibles
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);
catSound = "meow";
console.log(petCat, "says", catSound);

// Exercise: Advanced use of operators
// Task 1: Using the logical && operator
var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10);

// Task 2: Using the logical || operator
var timeRemaining  = 0;
var energy  = 10;

console.log("Game over: ",timeRemaining == 0 || energy == 0);

// Task 3: Using the modulus operator, %, to test if a given number is odd
var num1 = 2;
var num2 = 5;

var test1 = num1 % 2;
var test2 = num2 % 2;

var result1 = test1 == 0;
var result2 = test2 == 0;

console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// Task 4: Add numbers using the + operator
console.log(5 + 10);

// Task 5: Concatenate numbers and strings using the + operator
var now = "Now in ";
var three = 3;
var d = 'D!';
console.log(now + three + d);

// Task 6: Use the += operator to accumulate values in a variable
var counter = 0;

counter += 5;
counter += 3;

console.log(counter);


/**
Exercise: Practice conditional statements
Introduction
In this exercise, you will practice working with if else statements. By the end of this exercise, you will be able to write an if else statement that determines your source of income based on your age. You will also be able to write a switch statement that determines your evening routine based on the day of the week.
 */
var age = 10;

if (age >= 65){
    console.log("You get your income from your pension");
} else if ( age < 65 && age >= 18){
    console.log("Each month you get a salary");
} else {
    console.log("The value of the age variable is not numerical");
}

var day = 'Sunday';

switch(day){
    case 'Monday':
        console.log('Do something');
        break;
    case 'Tuesday':
        console.log('Do something');
        break;
    case 'Wednesday':
        console.log('Do something');
        break;
    case 'Thursady':
        console.log('Do something');
        break;
    case 'Friday':
        console.log('Do something');
        break;
    case 'Saturday':
        console.log('Do something');
        break;
    case 'Sunday':
        console.log('Do something');
        break;
    default:
        console.log('There is no such day!');
}


for(var i = 1; i <= 5; i++){
    console.log(1)
}
console.log('Counting completed!');

for(var i = 5; i >= 1; i--){
    console.log(1)
}
console.log('Countdown finished!');

var counter = 1;
while(counter <= 5){
    console.log(counter);
    counter += 1;
}
console.log('Counting completed!');

var counter = 5;
while(counter >= 1){
    console.log(counter);
    counter -= 1;
}
console.log('Countdown finished!');

var counter = 2018;
while(counter <= 2022){
    console.log(counter);
    counter += 1;
}

// 
for (var i = 1; i <= 10; i++){
    if (i === 1){
        console.log("Gold medal");
    } else if(i === 2){
        console.log("Silver medal");
    } else if(i === 3){
        console.log("Bronze medal");
    } else{
        console.log(i);
    }
}

// 
for (var i = 1; i <= 10; i++){
    switch(i){
        case 1:
        console.log("Gold medal");
            break;
        case 2:
        console.log("Silver medal");
            break;
        case 3:
        console.log("Bronze medal");
            break;
        default:
        console.log(i);
    }
}