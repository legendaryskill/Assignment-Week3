// DOM elements
const resultEl = document.getElementById('password');
const lengthEl = document.getElementById('pgLength');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const digitsEl = document.getElementById('digits');
const specialEl = document.getElementById('special');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomDigit,
  symbols: getRandomSpecial
};

// Add event listener to generate button
generateEl.addEventListener('click', () => {
  const length = Number(lengthEl.value);
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasDigit = digitsEl.checked;
  const hasSpecial = specialEl.checked;

  let pass = generatePassword(hasLower, hasUpper, hasDigit, hasSpecial, length);
  resultEl.innerText = pass.substring(0, length)
});

//generate password function
function generatePassword(lower, upper, number, symbols, length) {
  //1. Init pw var
  //2. filter out unchecked types
  //3. loop over length call generator function for each type
  //4. add final pw to the pw var and return

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbols

  console.log("typesCount: ", typesCount);

  const typesArr = [{lower}, {upper}, {number}, {symbols}].filter(
    item => Object.values(item)[0]
  );

  console.log('typesArr: ', typesArr);

  if(typesCount === 0){
    return '';
  }

  for(let i = 0; i<length; i+=typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();

      // console.log("funcName: ", funcName)
      // console.log("randomFunc[funcname]", randomFunc[funcName])
    });
  }

  return generatedPassword;
}


// Generator Functions

// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random()*26) + 97);
// }

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random()*26) + 65);
// }

// function getRandomDigit(){
//   return String.fromCharCode(Math.floor(Math.random()*10) + 48);
// }

// function getRandomSpecial(){
//   const symbols = [
//     '@',
//     '%',
//     '+',
//     '\\',
//     '/',
//     "'",
//     '!',
//     '#',
//     '$',
//     '^',
//     '?',
//     ':',
//     ',',
//     ')',
//     '(',
//     '}',
//     '{',
//     ']',
//     '[',
//     '~',
//     '-',
//     '_',
//     '.'
//   ]
//   return symbols[Math.floor(Math.random()*symbols.length)];
// }

