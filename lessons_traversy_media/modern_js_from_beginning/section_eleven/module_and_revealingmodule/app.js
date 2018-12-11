// // Basic Structure - a module that's going to be an iffy - an immediately invoked function expression

// (function () {
//   // Declare private varibles and functions

//   return {
//     // Declare public variables and functions

//   }
// })();


// // Standard Module Pattern
// const UICtrl = (function () {
//   let text = 'Hello World';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// Revealing Module Pattern
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({ id: 1, name: 'James' });

console.log(ItemCtrl.get(1));