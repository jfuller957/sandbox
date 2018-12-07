// Basic Function
// const sayHello = function() {
//   console.log('Hello');
// }
// sayHello();

// Somewhat Arrow Function
// const sayHello = () => {
//   console.log('Hello');
// }
// sayHello();


// One line Arrow Function does not need braces
// const sayHello = () => console.log('Hello');
// sayHello();

// const sayHello = () => 'Hello';
// console.log(sayHello());

// Same as above but longer
// const sayHello = function () {
//   return 'Hello';
// }
// console.log(sayHello());

// Return an Object
// const sayHello = () => ({ msg: 'Hello' });
// console.log(sayHello());

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('James')

// More than one param does need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('James', 'Fuller');

const users = ['James', 'Christina', 'Michael'];

// Longest
// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });
// console.log(nameLengths);

// Shortest
const nameLengths = users.map(name => name.length);
console.log(nameLengths);