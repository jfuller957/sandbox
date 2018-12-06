const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const christina = Object.create(personPrototypes);
christina.firstName = 'Christina';
christina.lastName = 'Vanderwerken';
christina.age = 34;

christina.getsMarried('Fuller');

console.log(christina.greeting());

const james = Object.create(personPrototypes, {
  firstName: { value: 'James' },
  lastName: { value: 'Fuller' },
  age: { value: 34 }
});

console.log(james);
console.log(james.greeting());
