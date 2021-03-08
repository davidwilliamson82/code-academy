const myName = 'Seymore';
let age = 5000;

age = age + 1;

let quarter = 0.25;

let itIsRaining = false;
let itIsNight = false;

// if (itIsRaining) {
//   console.log('Bring an umbrella');
// } else if (itIsNight) {
//   console.log('Get some sleep!!!')
// } else {
//   console.log('Wear sunscreen');
// }

// if (1 + 1 === 2) {
//   console.log('hello world!!!');
// } else {
//   console.log('Do math better');
// }


const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
];

const myCar = {
  wheels: 4,
  color: 'Red'
};

// for (let i = 0; i < 3; i = i + 1) {
//   console.log(i);
// }

// for (let i = 0; i < weekdays.length; i = i + 1) {
//   console.log(weekdays[i]);
// }

function getFive () {
  return 5;
}

function addFive (numberToAddFiveTo) {
  console.log('I\'m going to add five')
  return numberToAddFiveTo + 5;
}

function Person (name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log('Hello, my name is ' + this.name);
}

jerry = new Person('Jerry', 67);
molly = new Person('Molly', 44);