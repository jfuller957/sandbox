let re;
// Literal Character
re = /hello/;
re = /hello/i;  // i case insensitive

// Metacharacter Symbols
re = /^h/i;         // ^ Must start with
re = /d$/i;         // $ Must end with
re = /^hello$/i;    // Must begin and end with
re = /h.llo/i;      // Matches any one character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // ? Optional Character
re = /gre?a?y\?/i;  // Escape Characters

// String to match
const str = 'Gray?';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT matches ${re.source}`);
  }
}

reTest(re, str);