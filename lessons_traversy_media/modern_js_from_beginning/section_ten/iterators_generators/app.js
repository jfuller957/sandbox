// Iterator Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length ?
//         { value: names[nextIndex++], done: false } :
//         { done: true }
//     }
//   }
// }

// // Create an array of names
// const namesArr = ['James', 'Christina', 'Mike'];

// // Init iterator and pass in the names arrary
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);


// Generator Example
// function* sayNames() {
//   yield 'James';
//   yield 'Christina';
//   yield 'Mike';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);


// ID Creator
function* createIds() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);