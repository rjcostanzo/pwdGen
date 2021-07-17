// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

/* INITIALIZATION
– Initialize arrays and variables for potential selection
– Removed letter 'O' and 'o' as to not mistake with zeroes
*/

var lowercaseArray = ['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];

var passLength;
var useUppercase;
var useNumbers;
var useSymbols;
var acceptableChars = ['a'];

/* END INITIALIZATION */

/* USER CRITERIA
– Collect user criteria for password complexity
– Ensure valid length and store criteria variables
– Apply criteria to acceptableChars and handoff to generation if valid
*/

function getCriteria() {
  var acceptableChars = ['a'];
  var passLength = prompt("Welcome to Rio's Password Generator.\nPlease choose a length (8-128 characters).");

  if (passLength < 8 || passLength > 128)
  {
    alert("Choose a valid length. Click 'Generate Password' again to retry.");
    location.reload;
    return null;
  }

  else
  var useUppercase = confirm("Use uppercase letters in password?");
  var useNumbers = confirm("Use numbers in password?");
  var useSymbols = confirm("Use symbols in password?");

  Array.prototype.push.apply(acceptableChars, lowercaseArray);

  if (useUppercase === true)
  {
    Array.prototype.push.apply(acceptableChars, uppercaseArray);
  }
  if (useNumbers === true)
  {
    Array.prototype.push.apply(acceptableChars, numberArray);
  }
  if (useSymbols === true)
  {
    Array.prototype.push.apply(acceptableChars, symbolArray);
  }

  console.log("passLength: " + passLength);
  console.log("useUppercase: " + useUppercase);
  console.log("useNumbers: " + useNumbers);
  console.log("useSymbols: " + useSymbols);

  console.log(acceptableChars);

  generatePassword(acceptableChars, passLength);

}

/* END USER CRITERIA */

/* GENERATION
– Use given criteria to generate password
– Append each character to generatedPassword
– Give final confirmation before displaying
*/

function generatePassword(acceptableChars, passLength) {

var generatedPassword = '';
var newLetter;

  for (let x = 0; x < passLength; x++)
  {
    newLetter = acceptableChars[Math.floor(Math.random() * acceptableChars.length)];
    console.log("Iteration #" + (x + 1) + ": " + newLetter);
    generatedPassword = generatedPassword + newLetter;
  }

  var finalConfirm = confirm("Press OK to reveal your new password.");
  if (finalConfirm === true) 
  {
    writePassword(generatedPassword);
  }
  else
  {
    alert("Generation aborted. Click 'Generate Password' to restart.");
    location.reload;
    return null;
  }
}

/* END GENERATION */

// Write password to the #password input
function writePassword(generatedPassword) {
  console.log("Generated Password: " + generatedPassword);
  var newPassword = document.querySelector("#password");
  newPassword.innerText = generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);
