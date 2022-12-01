// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  //show the first prompt when/if user click the generate password button
  //first prompt should say "How many characters would you like your password to contain?" if entered less than 10 then alert (password length must be at least 10 characters) and same thing with no more then 64
  var length = prompt(
    "How many characters would you like your password to contain?"
  );

  if (length < 10 || length > 64) {
    alert("Password length must be between 10 and 64 characters");
    throw new Error("validation failed, password length");
  }

  //second prompt should say "Click OK to confirm including special characters."
  var specialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  //third prompt should say "Click OK to confirm including numeric characters."
  var numericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  //fourth prompt should say "Click OK to confirm including lowercase characters."
  var lowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  //fifth prompt should say "Click OK to confirm including uppercase characters."
  var upperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  var result =
    specialCharacters ||
    numericCharacters ||
    lowerCasedCharacters ||
    upperCasedCharacters;

  if (result === false) {
    alert("You must at least choose one of the options");
    throw new Error("validation failed, no options");
  }

  // return the options as an options object
  // example
  /**
   * {
   *  special: true,
   *  numeric: false
   *  lowercase: true
   *  uppercase: false
   * }
   */
  // check if at least one of the options is selected
  // if not, alert the warning message and stop
  // return the options
  var options = {
    lengthOfPassword: length,
    special: specialCharacters,
    numeric: numericCharacters,
    lowercase: lowerCasedCharacters,
    uppercase: upperCasedCharacters,
  };
  return options;
}

// TODO Function for getting a random element from an array
function getRandom(arr) {
  // use math random to get random index
  // return the item on that index from arr
}

// Function to generate password with user input
function generatePassword() {
  //get users option
  var options = getPasswordOptions();
  console.log(options);

  // TODO depending on the options, generate the bigger array using the arrays above
  var allOptions = [];
  if (options.special === true) {
    allOptions = allOptions.concat(specialCharacters);
  }
  if (options.numeric === true) {
    allOptions = allOptions.concat(numericCharacters);
  }
  if (options.lowercase === true) {
    allOptions = allOptions.concat(lowerCasedCharacters);
  }
  if (options.uppercase === true) {
    allOptions = allOptions.concat(upperCasedCharacters);
  }

  console.log(allOptions);

  // assume password length is n
  // for loop i = 0 until i is n
  // pick a random letter, add it to the password string

  // TODO grab random chars from the arrays above, if the user chose to select from that array
  //how do we generate a string based on a provided length?
  // return the generated password

  return "hebelehubele";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
