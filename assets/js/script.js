// Assignment Code, universal variables
var generateBtn = document.querySelector("#generate");
var isNumberIncluded; 
var isLowercaseIncluded;
var isUppercaseIncluded;
var isSymbolIncluded;  

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Generates password based on confirmation criteria
function generatePassword() {
  var numOfCharacters = prompt("How long would you like the password to be (8-128 characters)?"); 

  if (numOfCharacters != null && numOfCharacters != '' && (numOfCharacters > 7) && (numOfCharacters < 129)) {
    confirmTypes();
    return getRandomPassword(numOfCharacters);
  }
  else if (numOfCharacters === null) { //clicking cancel produces null, so if they choose cancel it exists popup back to main screen
    return;
  }
  else  {
    generatePassword(); //reprompts user if they don't enter anything
  }
}

//Prompts user to confirm which types are included in generated password above
function confirmTypes() {
  isNumberIncluded = confirm("Would you like the password to contain numbers?");
  isLowercaseIncluded = confirm("Would you like the password to contain lowercase letters?");
  isUppercaseIncluded = confirm("Would you like the password to contain uppercase letters?");
  isSymbolIncluded = confirm("Would you like the password to contain symbols?");

  if (!isNumberIncluded && !isLowercaseIncluded && !isUppercaseIncluded && !isSymbolIncluded) {
    alert("You must choose at least one character type");
    generatePassword();  //reprompts user from the beginning if they don't select any character type
  }
}

//Function for password creation length
function getRandomPassword(numOfCharacters) {
  var newPassword = "";
  for (var i = 0; i < numOfCharacters; i++) {
    var newCharacter = getRandomCharacter();
    newPassword = newPassword.concat(newCharacter); //Adds a new character to newPassword as many times as is the length of the chosen password; e.g. 8 characters long.
  }
  return newPassword;
}

//Checking if each character type question is true, and pushing to a randomized, combined array
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

function getRandomSymbol() {
  var symbols = "!#$%&'()]*+,-./:;<=>?@[^_`{|}~" 
  return symbols[Math.floor(Math.random() * symbols.length)]
}



