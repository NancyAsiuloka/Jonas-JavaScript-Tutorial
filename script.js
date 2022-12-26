// variable mutation and type coercion

// var firstName = 'john';
// var age = 28;

// Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job
// + '. Is he married? ' + isMarried);

// variable mutation
// age = 'three';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job
// + '. Is he married? ' + isMarried);

// var lastName = prompt('what is his last name?');
// console.log(firstName + ' ' +  lastName);

// // Basic operators

// var year, yearJohn, yearMark;
// now = 2018;


// ageJohn = 28;
// ageMark = 33;

// // math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// // Logical operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john');
// var x;
// console.log(typeof x);

// // operator precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // multiple operator
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // more operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

// coding challenge
// var johnHeight, markHeight, johnMass, markMass;
// johnHeight = 10;
// markHeight = 20;

// johnMass = 40;
// markMass = 30;
// var johnBodyMass = johnMass / johnHeight ^ 2;
// console.log(johnBodyMass);

// var markBodyMass = markMass / markHeight ^ 2;
// console.log(markBodyMass);

// var higherBodyMass = markBodyMass > johnBodyMass;
// console.log('Is Mark\'s bodymass higher than John\'s? ' + higherBodyMass);

// // If / else statements
// var firstName = 'John';
// var civilStatus = 'single';

// if(civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var isMarried = true;
// if(isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' will hopefully marry soon');
// }

// var johnHeight, markHeight, johnMass, markMass;
// johnHeight = 10;
// markHeight = 20;

// johnMass = 40;
// markMass = 30;
// var johnBodyMass = johnMass / johnHeight ^ 2;
// var markBodyMass = markMass / markHeight ^ 2;

// if(johnBodyMass > markBodyMass) {
//     console.log('John\'s bodymass higher than Mark\'s.');
// } else {
//     console.log('Mark\'s bodymass higher than John\'s.');
// }

// boolean logic

// var firstName = 'John';
// var age = 20;

// // the  AND and OR opeartor
// if(age < 13) {
//     console.log(firstName + ' is a boy');
// } else if(age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if(age >= 20 && age < 30){
//     console.log(firstName + ' is a young man');
// }
// else {
//     console.log(firstName + ' is man');
// }

// The ternary operator and switch statements
var firstName = 'John';
var age = 14;

// ternary operator, itis called ternary because it has 3 operand
// which are "?, :, ;"
// age >= 18 ? console.log(firstName + ' drinks beer.')
//     : console.log(firstName + ' drinks juice');

// var drink = age >= 18? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18){
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// // switch statement
// var job = 'teacher';
// switch (job){
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//     case 'driver':
//         console.log(firstName + ' drives an uber in Libson.');
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
// }

// age = 56;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

// // truthy and falsy values and equality operators

// falsy values: are undefined, null, 0, '', NaN
// truthy values: are NOT falsy values

// var height = 23;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable is not defined');
// }

// // equality operators
// if (height === '23') {
//     console.log('The == operator does type coercion');
// }

// coding challenge
// var johnScore = [89, 120, 103];
// var mikeScore = [116, 94, 123];

// var mikeAvrScore = (86 + 91 + 120) / 3;
// console.log(mikeAvrScore);

// var johnAvrScore = (91 + 120 + 86) / 3;
// console.log(johnAvrScore);

// if (mikeAvrScore > johnAvrScore){
//     console.log('Mike\'s team won with the average score of ' + mikeAvrScore);
// } else {
//     console.log('John\'s team won with the average score of ' + johnAvrScore);
// }

// var maryScore = [97, 134, 105];
// var maryAvrScore = (34 + 90 + 95) / 3;
// console.log(maryAvrScore);

// if (mikeAvrScore > johnAvrScore && mikeAvrScore > maryAvrScore){
//     console.log('Mike\'s team is the winner');
// } else if(johnAvrScore > mikeAvrScore && johnAvrScore > maryAvrScore) {
//     console.log('John\'s team is the winner');
// } else if(maryAvrScore > mikeAvrScore && maryAvrScore > johnAvrScore) {
//     console.log('Mary\'s team is the winner');
// } else {
//     console.log('There is a draw');
// }

// Functions

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1940);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' +
//         retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }

// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

// function statements and expressions

// function declaration
// function whatDoYouDo(job, firstName){}

// function expressions
// var whatDoYouDo = function(job, firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kid how to code';
//         case 'driver':
//             return firstName + ' drives a car in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mike'));

// ARRAYS

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';

// console.log(names);

// // Different data types

// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.')
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ?  'John is NOT a designer':
// 'John IS a designer';

// console.log(isDesigner);

// Coding challenge

// function tipCalculate(bill) {
//   var percentage;

//   if (bill < 50) {
//     percentage = .2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = .15;
//   } else  {
//     percentage = .1;
//   }l
//   return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculate(bills[0]),
//             tipCalculate(bills[1]),
//             tipCalculate(bills[2])];

// var finalValues = [bills[0] + tips[0], 
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]];

// console.log(tips, finalValues);


// Object and properties

// object literals
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false 
// };

// console.log(john.firstName);
// console.log(john['lastName']);

// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);


// object methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false, 
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };
// john.calcAge();
// console.log(john);


// coding challenge
// var john = {
//     fullName: 'John Smith',
//     mass: 90,
//     height: 1.5,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };


// var mark = {
//     fullName: 'Mark Smith',
//     mass: 80,
//     height: 1.7,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

// if(john.calcBMI() > mark.calcBMI()) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else if(mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }

//  Loops and iteration

// for loop
// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// var john = ['john', 'smith', 1990, 'designer', 'blue'];
// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }

// // while loop
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
// var john = ['john', 'smith', 1990, 'designer', 'blue'];
// for (var i = 0; i < john.length; i++){
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// // break
// for (var i = 0; i < john.length; i++){
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// // looping backward
// for(var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }























































