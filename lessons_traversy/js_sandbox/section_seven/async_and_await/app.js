// async function myfunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // Wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }

// }

// myfunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once promise is resolved
  const data = await response.json();
  // Only proceed once 2nd promise is resolved
  return data;
}

getUsers().then(users => console.log(users));