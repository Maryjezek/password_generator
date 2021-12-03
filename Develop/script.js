// Assignment code here
//MB code

function generatePassword() {
 
  // ask the user 
  var length = window.prompt('How many characters would you like your password to contain?');
  var length = Number(length);
    if (length > 7 && length <129)
    { 
      var specialChar = window.prompt('Click OK if you want special characters?');

      var numeric = window.prompt('Click OK if you want numeric characters?');
    
      var lowerCase = window.prompt('Click Ok if you want lowercase characters?');
    
      var upperCase = window.prompt('Click OK if you want uppercase characters?');

      if (specialChar && numeric && lowerCase && upperCase)
      {
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%&^!@#$*()",
          password = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          password += charset.charAt(Math.floor(Math.random() * n));
      }

     return password;
      }


  

  else
  {
    var prompt = window.prompt('You must choose a number at least 8 and no greater than 128?');
    generatePassword();
  }

  if (prompt ==="" || prompt === null)
  {
  var prompt = window.prompt('Must select at least one character type?');
  //after this prompt restart the loop
  generatePassword();
  }



  return password;


}





//MB code end



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

//test