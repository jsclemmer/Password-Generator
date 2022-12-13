// Assignment Code
var generateBtn = document.querySelector('#generate');
var textAreaEl = document.querySelector('#textarea');
var typefaceEl = document.querySelector('#typeface');

var 


var typeface;
var element = [alphaNumericCharacters]


// Write password to the #password input
typefaceEl.addEventListener('change', function (event){
    event.preventDefault();
    typeface = typefaceEl.value;
    document.querySelector('.container').style.fontfamily = typeface;
});

function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password.key);

textAreaEl.addEventListener("generate")
var alphaNumericCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvzxyz1234567890".split(
);
if (alphaNumericCharacters.includes(password)){
    for (var i =0; i elements.length; i++) {

        elements[i].textContent += password.key
    }
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);