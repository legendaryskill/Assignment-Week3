// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// **PROMPTS**

const outputEL = document.getElementById(output)
const generateEL = document.getElementById(generate)

// Generator Functions

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97)
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65)
}

function getRandomDigit(){
  return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function getRandomSpecial(){
  const symbols = '`~!@#$%^&*()_-+={[}]\\|:;"<,>.?/\''
  return symbols[Math.floor(Math.random()*symbols.length)]
}

// Add event listener to generate button
