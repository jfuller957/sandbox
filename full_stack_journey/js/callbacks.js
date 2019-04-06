function callback() {
  console.log("Coming from callback");
}

function higherOrder(fn) {
  console.log("About to call callback");
  fn(); // Callback has been invoked
  console.log("Callback has been invoked");
}

higherOrder(callback);
