// CommonJS Module Syntax
// const person = require("./mymodule1");

// ES2015 Module Syntax
// import { person, sayHello } from "./mymodule2";

// Ixport all in one (import *(<-All) as (makeUpName) from (hostFileLocation))
import * as mod from "./mymodule2";

console.log(mod.person.name);

console.log(mod.sayHello());
