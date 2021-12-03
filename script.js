// Assignment code here
//MB code begin

function generatePassword() {
 
  // ask the user 
  var length =window.prompt('How many characters would you like your password to contain?');
  var length = Number(length);
    if (length > 7 && length <129)
    { 
      var specialChar = window.confirm('Click OK if you want special characters?');

      var numeric = window.confirm('Click OK if you want numeric characters?');
    
      var lowerCase = window.confirm('Click Ok if you want lowercase characters?');
    
      var upperCase = window.confirm('Click OK if you want uppercase characters?');
        
      //16 possible combinations or permuations of possibilites to select
        //1
      if (specialChar && numeric && lowerCase && upperCase)
      {
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%&^!@#$*()",
          password = "";
          for (var i = 0, n = charset.length; i < length; ++i) {
          password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //2
      if (!specialChar && numeric && lowerCase && upperCase)
        {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //3
      if (specialChar && !numeric && lowerCase && upperCase)
        {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ%&^!@#$*()",
        password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //4
      if (specialChar && numeric && !lowerCase && upperCase)
        {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%&^!@#$*()",
        password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }

      //5
      if (specialChar && numeric && lowerCase && !upperCase)
        {
        charset = "abcdefghijklmnopqrstuvwxyz0123456789%&^!@#$*()",
        password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //6
      if (!specialChar && !numeric && lowerCase && upperCase)
        {
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //7
      if (specialChar && !numeric && !lowerCase && upperCase)
      {
          charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ%&^!@#$*()",
          password = "";
          for (var i = 0, n = charset.length; i < length; ++i) {
          password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //8
      if (specialChar && numeric && !lowerCase && !upperCase)
        {
        charset = "0123456789%&^!@#$*()",
        password = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
      }
    }
      //9
      if (!specialChar && numeric && lowerCase && !upperCase)
      {
      charset = "abcdefghijklmnopqrstuvwxyz0123456789",
      password = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  }
      //10
      if (specialChar && !numeric && lowerCase && !upperCase)
      {
      charset = "abcdefghijklmnopqrstuvwxyz%&^!@#$*()",
      password = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  }

    //11
    if (!specialChar && numeric && !lowerCase && upperCase)
    {
    charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
}

    //12
    if (!specialChar && !numeric && !lowerCase && upperCase)
      {
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      password = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  }
    //13
    if (!specialChar && !numeric && lowerCase && !upperCase)
      {
      charset = "abcdefghijklmnopqrstuvwxyz",
      password = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
  }

    //14
    if (!specialChar && numeric && !lowerCase && !upperCase)
    {
    charset = "0123456789",
    password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
}
    //15
    if (specialChar && !numeric && !lowerCase && !upperCase)
    {
    charset = "%&^!@#$*()",
    password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
}
  
    //16
    if (!specialChar && !numeric && !lowerCase && !upperCase)
      {
        var prompt = window.confirm('Must select at least one character type?');
        //after this prompt restart the loop
        generatePassword();
      }
    
      
return password;
}

  
  else
  {
    var prompt = window.confirm('You must choose a number at least 8 and no greater than 128?');
    generatePassword();
  }

   //MB code end

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
