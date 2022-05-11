// Assignment Code
var generateBtn = document.querySelector("#generate");
var isNumberIncluded; 
var isLowercaseIncluded;
var isUppercaseIncluded;
var isSymbolIncluded;  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Prompts user and generates password based on if "confirm questions" are true (okay) or false (cancelled)
function generatePassword() {
  var numOfCharacters = prompt("How long would you like the password to be (8-128 characters)?"); 

  if (numOfCharacters != null && numOfCharacters != '' && (numOfCharacters > 7) && (numOfCharacters < 129)) {
    isNumberIncluded = confirm("Would you like the password to contain numbers?");
    isLowercaseIncluded = confirm("Would you like the password to contain lowercase letters?");
    isUppercaseIncluded = confirm("Would you like the password to contain uppercase letters?");
    isSymbolIncluded = confirm("Would you like the password to contain symbols?");
    
    if (!isNumberIncluded && !isLowercaseIncluded && !isUppercaseIncluded && !isSymbolIncluded) {
      alert("You must choose at least one character type");
      generatePassword();
    }
    return getRandomPassword(numOfCharacters);
  }
  else if (numOfCharacters === null) { //clicking cancel produces null
    return;
  }
  else  {
    generatePassword(); //reprompts you if you don't enter anything
  }
}

//Overall function for password creation
function getRandomPassword(numOfCharacters) {
  var newPassword = "";
  for (var i = 0; i < numOfCharacters; i++) {
    var newCharacter = getRandomCharacter();
    newPassword = newPassword.concat(newCharacter); //Adds a new character to newPassword as many times as is the length of the chosen password; e.g. 8 characters long.
  }
  return newPassword;
}

//Checking if each question is true, and pushing to a randomized, combined array
function getRandomCharacter() {
  var characterArray = [];
  if (isNumberIncluded) {
    characterArray.push(getRandomNumber());
  }
  if (isLowercaseIncluded) {
    characterArray.push(getRandomLowercaseLetter());
  }
  if (isUppercaseIncluded) {
    characterArray.push(getRandomUppercaseLetter());
  }
  if (isSymbolIncluded) {
    characterArray.push(getRandomSymbol());
  }
  return characterArray[Math.floor(Math.random() * characterArray.length)]
} 

//Functions for producing each type of random character:
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomLowercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUppercaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

var symbols = "!#$%&'()]*+,-./:;<=>?@[^_`{|}~" 
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}



