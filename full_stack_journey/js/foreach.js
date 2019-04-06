const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(days[0]);

days.forEach(function(day, index) {
  console.log(`${index + 1} day of the week -- ${day}`);
});
