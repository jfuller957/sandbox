function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// console.log(days[0]);

// days.forEach(function(day, index) {
//   console.log(`${index + 1} day of the week -- ${day}`);
// });

let arr = [1, 2, 3, 4, 5, 6];

function double(arr) {
  for (let i = 0; i < arr.length; i++) console.log(arr[i] * 2);
}

double(arr);

forEach(arr, function(number) {
  console.log(number * 2);
});

let strings = ["my", "forEach", "example"];

let result = "";

forEach(strings, function(str, index, array) {
  if (array.length - 1 !== index) {
    result += str + " ";
  } else {
    result += str + "!!!";
  }
});

console.log(result);
