/*

*** VARIABLE CREATION

var firstName = 'jon';
var middleName;
var age = 30;
var job = false;

*** TYPES OF VARIABLES

console.log(typeof firstName);    string 
console.log(typeof middleName);   undefined
console.log(typeof age);          number
console.log(typeof job);          boolean


*** VARIABLE MUTATION AND COERCION

let name = 'John';
let age = 28;
let type = name + age;

console.log (name + ' ' + age); // will convert age into string in this command aka COERCION.
console.log(typeof type); // Output: string + age === string.

let job, isMarried, boolAndStringType;
job = 'IT Engineer';
isMarried = prompt('Are you married?'); //prompting: asking users value from the browser.
boolAndStringType = job + isMarried;

console.log('Job: ' + job);
console.log('Marital Status : ' + isMarried);
console.log(typeof boolAndStringType); // Output: string + boolean === string


*** MATH OPERATIONS

let x, y;
x = y = 26; //assign 26 to both x and y. Precedence: y = 26, x = y;

*** CODING CHALLENGE #1

- Create a BMI calculator for Mark and John, and display whose BMI is higher

let Mark, John;
Mark = new calculateBMI();
John = new calculateBMI();

function calculateBMI() {
    mass = prompt('What is your current mass? (Kilograms)');
    height = prompt('What is your current height? (Meters)');
    this.mass = mass;
    this.height = height;
    this.bmi = mass / (height **=2);
}

console.log("Mark's BMI is: " + Mark.bmi);
console.log("John's BMI is: " + John.bmi);

Mark.bmi > John.bmi ? console.log("Mark's BMI is greater: " + Mark.bmi) : console.log("John's BMI is greater: " + John.bmi) ;

*** ALTERNATIVE IF STATEMENTS

let condition = true;
//condition && (condition=5);
//condition &&= condition = 5;
//condition ? condition = 15 : condition = 1;

*** SWITCH STATEMENT

let job = prompt('Enter job: ');
switch(job) {
    case 'teacher': console.log('I am a teacher');break;
    case 'chef': console.log('I am a good chef');break;
    case 'driver': console.log('I am a chauffeur');break;
    default: console.log('does something else');
}

*** FALSY VALUES
will be evaluated as FALSE in if/else situations

- undefined
- null
- 0,
- ''
- NaN

NOTE:
let sample; sample is FALSE
typeof sample === undefined;


*** TEMPLATE LITERALS
use ` (backticks) in order to precisely execute the format
use ${} in order to execute expressions
NOTE: objects and array use [] to access their contents.
e.g. = `${Object[property1]}; ${Array[0]}


*** CODING CHALLENGE #2

let John, Mike, Players, counter = 0;
John = {
    // g1: 89,
    // g2: 120,
    // g3: 103,
    g1: 116,
    g2: 94,
    g3: 123,
};

Mike = {
    // g1: 116,
    // g2: 94,
    // g3: 123,
    g1: 89,
    g2: 120,
    g3: 103,
};

Players = [John,Mike];

while(Players && Players.length > counter) {
    let avg = loopCount = 0;
    for (game in Players[counter]) {
        console.log(Players[counter][game]);
        avg += Players[counter][game];
        loopCount += 1;
    }
    avg /= loopCount;
    Players[counter]['avg'] = avg;
    counter++;
}
console.log(John, Mike)

if (John.avg > Mike.avg) {
    console.log("John's average is higher, scoring at " + John.avg);
}
else if (Mike.avg > John.avg) {
        console.log("Mike's average is higher, scoring at " + Mike.avg);
    }
else if (Mike.avg === John.avg) {
        console.log("John and Mike's avg is the same, scoring at " + John.avg);
}

*/