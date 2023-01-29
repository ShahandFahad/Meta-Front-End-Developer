// Week 2 Exercises
/**
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".

Your output should be the following:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3 
*/
function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    } 
}

// function Call
letterFinder("test", 't');

// Array and Objects

var clothes = [];

clothes.push("Shirts");
clothes.push("Trousers");
clothes.push("Sneakers");
clothes.push("Caps");
clothes.push("T-Shirts");

clothes.pop();

clothes.push("Wallet");

console.log(clothes[2]);

var favCar = {};

favCar.color = 'Black';
favCar.covertible = 1;

console.log(favCar);

// 
//example of adding properties and methods to an object
var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()


// Tells the type of datatype
console.log(typeof(car));
console.log(typeof(car.turnTheKey));

// Error Handling

function addTwoNums(a , b){
    try{
        if(typeof(a) != number){
            throw new ReferenceError('the first argument is not a number');
        } else if(typeof(b) != number){
            throw new ReferenceError('the second argument is not a number');
        } else{
            console.log(a + b);
        }
    } catch(err){
        console.log("Error!", err);
    }
}


addTwoNums(5, "5");

console.log("It still works");


// Defensive Programming Exercise:

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;

    if(condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else{
        console.log("Please pass correct arguments to the function.");
    }
}

letterFinder('I', 'IF');

letterFinder('IQSF', 'I');