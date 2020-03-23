// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// Add event listener to generate button



document.getElementById("generate").addEventListener("click");

      var userName = prompt("Hi, What's your name?");
      var passwordConfirm = confirm("Do you need a password?");
      var lenghtConfirm = confirm("It has to be more than 8 characters long");
      var UpperConfirm = confirm("A few uppercase characters will be added");
      var LowerConfirm = confirm("And a few lowercase");
      var NumbersConfirm = confirm("We need to add numbers too");
      var SpecialChaConfirm = confirm("Almost done, let's add special characters");
      


function passwordQuery () {
alert.prompt("");
}

 
if (userName) {
    alert(passwordConfirm);
  }
  else if{
    alert("You don't want a password :(");
  }
   
  else if (lenghtConfirm) {
    alert("confirms");
  }
  else if{
      alert("You don't want a password :(");
  }
   
  else if (UpperConfirm) {
      alert("You don't want a password :(");
  }
   
  else if(LowerConfirm) {
      alert("You don't want a password :( ");
  }
  else if(NumbersConfirm) {
    alert("You don't want a password :( ");
}
else (SpecialChaConfirm) {
    alert("You don't want a password :( ");
}










  else alert("Hope you like your new password :) " + userName);
  }
   
  



 const resultEl = document.getElementById('result');
 const lenghtEl = document.getElementById('lenght');
 const uppercaseEl = document.getElementById('uppercase');
 const lowercaseEl = document.getElementById('lowercase');
 const numbersEl = document.getElementById('number');
 const symbolsEl = document.getElementById('symbols');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols,
    };
    
    
    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() *26) + 97);
    }
    
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() *26) + 65);
    }
    
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() *10) + 48);
    }
    
    function getRandomSymbols() {
        const symbols = '!@#$%^&*(){}[]+~<>';
        return symbols[Math.floor(Math.random() * symbols.length)];
    }
     
    console.log(getRandomLower());
    console.log(getRandomUpper());
    console.log(getRandomNumber());
    console.log(getRandomSymbols());



