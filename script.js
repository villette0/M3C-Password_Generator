// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
    var numCharacters = prompt("How long would you like the password to be (8-126 characters)?") 
    console.log(numCharacters);
    if (numCharacters != null && numCharacters != '') {
      randomFunction();
    }
    else if (numCharacters === null) {
      return;
    }
    else  {
      generatePassword();
    }
  }
}

//Overall function
function randomFunction() {
  getRandomLowercaseLetter();
  getRandomUppercaseLetter();
  getRandomNumber();
  getRandomSymbol();
  console.log(getRandomSymbol());
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//My additions, still working: 
//confirm("Would you like the password to contain number?")

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



