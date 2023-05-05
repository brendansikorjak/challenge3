// Assignment code here
var allChar = {
  lowercase: ["abcdefghijklmnopqrstuvwxyz"],
  uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  numbers: ["1234567890"],
  special: ["!@#$%^&*(,)-_+=[{]}|;:?<>/~`"],
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var passwordChar = "";
    var password = ""; 
    // prompt questions
    let lengthChoice = prompt("How long do you want the password to be?");
    console.log(lengthChoice);
    while (lengthChoice < 8 || lengthChoice > 128){
      lengthChoice = prompt("The password length must be at least 8 characters and no more than 128 characters!\nPlease pick a new password length")
    }

    let lwrCaseChoice = confirm("Do you want the password to include lowercase letters?");
    if (lwrCaseChoice) {
      passwordChar += allChar.lowercase;
    };
    console.log(lwrCaseChoice);

    let uprCaseChoice = confirm("Do you want the password to include uppercase letters?");
    if (uprCaseChoice) {
      passwordChar += allChar.uppercase;
    };
    console.log(uprCaseChoice);

    let numChoice = confirm("Do you want the password to include numbers?");
    if (numChoice) {
      passwordChar += allChar.numbers;
    };
    console.log(numChoice);

    let specialChoice = confirm("Do you want the password to include special characters?");
    if (specialChoice) {
      passwordChar += allChar.special;
    };
    console.log(specialChoice);

    //generates random password
    for (var i = 0; i < lengthChoice; i++) {
      password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }
    console.log(password);
    return password;
    
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);