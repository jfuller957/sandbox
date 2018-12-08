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

// Brackets [] - Character Set
re = /gr[ae]y/i;    // Must be an a or e.  This is a better choice than /gre?a?y/i; because brackets will go null if the characters aren't acceptable.
re = /[GF]ray/;     // Must be a G or F not g or f or other character
re = /[^GF]ray/;    // Must be anything except G or F
re = /[A-Z]ray/;    // Match any Uppercase Letter
re = /[a-z]ray/;    // Match any Lowercase Letter
re = /[A-Za-z]ray/; // Match any Letter
re = /[0-9]ray/;    // Match any Digit
re = /[0-9][0-9]ray/;    // Match any Lowercase Letter

// Brace {} - Quantifiers
re = /Hel{2}o/i;    // The letter preceeding the {} must occur exactly {m} times.
re = /Hel{2,4}o/i;  // The letter preceeding the {} must occur 2 to 4 times.

re = /Hel{2,}o/i;   // The letter preceeding the {} must occur at least {m,} times.

// Parentheses () - Grouping
re = /([0-9]x){3}/;

// String to match
const str = '3x3x3x';

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