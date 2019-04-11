//// CommonJS Module Syntax
// const person = require("./mymodule1");

//// ES2015 Module Syntax
// import { person, sayHello } from "./mymodule2";

//// Import all in one (import *(<-All) as (makeUpName) from (hostFileLocation))
// import * as mod from "./mymodule2";

// console.log(mod.person.name);
// console.log(mod.sayHello());

// When importing defaults {} are not needed
import greeting from "./mymodule2";

console.log(greeting);
