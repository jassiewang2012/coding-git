/*
*
Dog Years

Time moves quickly for dogs. 8 years in a human's life is like 45 years in a dog's life! How old would you be if you were a dog?
Here's how you convert your age to dog years:
The first two human years of a dog's life count as 10.5 dog years each.
Each human year following counts as 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your age into dog years.


*
*/

//Create a variable named myAge, and set it equal to my age.
let myAge  = 18;

//Create a variable named earlyYears, and save the value 2.
let earlyYears = 2;

earlyYears *=10.5;

//subtract 2 from my age
let laterYears = myAge - 2;

//Multiply the laterYears variable by 4
laterYears *=4;

console.log(`earlyYears is ${earlyYears} and laterYears is ${laterYears}`);

//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.
let myAgeInDogYears = earlyYears + laterYears;

//Save my name in all lower case
let myName = 'Jassie'.toLowerCase();


//output my name with my age in dog year
console.log(`My name is ${myName}. I am ${myAgeInDogYears} year old in dog years.`);
