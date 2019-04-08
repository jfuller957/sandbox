let p1 = new Promise(function(resolve, reject) {
  reject("Error");
});

p1.then(function(data) {
  console.log("Promise p1 resolved with data:", data);
}).catch(function(data) {
  console.log("Promise p1 rejected with data:", data);
});
