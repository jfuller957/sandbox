let timerId = setTimeout(function() {
  console.log("This function runs in 30 seconds");
}, 30000);

let num = 0;
let intervalId = setInterval(function() {
  num++;
  console.log("num: ", num);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// let countDown = setInterval(function(num) {
//     num --;
//     console.log("Timer: ", num);
//     if (num === 0) {
//         console.log("Ring, Ring, Ring!!!");
//         clearInterval(countDown);
//     }
// }, 1000);

function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer:", seconds);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(intervalId);
    }
  }, 1000);
}

function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}
