let john = {
  name: "I am John",
  age: 24,
  isActive: true
};

let mary = {
  name: "I am Mary",
  age: 23,
  isActive: true
};

let sam = {
  name: "I am Sam",
  age: 29,
  isActive: false
};

let users = new Map();

users.set("john", john); // key 'john' can be anything and variable john is not made up is a reference
users.set("mary", mary);
users.set("sam", sam);

/* Map() always returns an iterable.
Unlike an object you can find out exactly how many
things are in a map using .size
*/

// console.log(users);
// console.log(`There are ${users.size} users!`);
// console.log(users.get('sam'));

/*
To get an MapIterator use .keys
To iterate over .keys for of is useful
*/

//console.log(users.keys());

for (const key of users.keys()) {
  console.log(key);
}

for (const value of users.values()) {
  console.log(value);
}
