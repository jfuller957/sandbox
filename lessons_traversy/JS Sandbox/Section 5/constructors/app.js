// Person Constuctor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const james = new Person('James', 34);
// console.log(james.age);

const james = new Person('James', '12-20-1983');
console.log(james.calculateAge());
