// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Alert box
alert("Hello! I am an alert box!!");



//Still working: Object of functions:
var randomFunction = {
  lowerLetter: getRandomLowercaseLetter,
  upperLetter: getRandomUppercaseLetter,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};


//Variable for symbol characters to use in getRandomSymbol function.
var symbols = "!#$%&'()]*+,-./:;<=>?@[^_`{|}~"

//Functions for producing each type of random character:
function getRandomLowercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}