//Object.prototype
//Person.prototype

// Person Constuctor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate Age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const james = new Person('James', 'Fuller', '12-20-1983');
const crick = new Person('Christina', 'Vanderwerken', 'November 14 1984');
console.log(crick);

console.log(crick);

console.log(james.calculateAge());

console.log(crick.getFullName());

crick.getsMarried('Fuller');

console.log(crick.getFullName());

console.log(crick.hasOwnProperty('firstName'));
