document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an xhr Object or xmlHttp Object
  const xhr = new XMLHttpRequest();

  // OPEN - specifies the type of request and the url/file name we make it to and whether we want it to be asynchonous.
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinner/loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function () {
    if (this.status === 200) {
      //console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  xhr.onerror = function () {
    console.log('Request error...');
  }

  // Original way to xhr.onload
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.send();

  // Common HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}