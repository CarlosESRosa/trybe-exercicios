var string = "aaabbaaa";

console.log(isPalindrome(string));
function isPalindrome(string) {
  var newString = "";

  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  if (string === newString) {
    return true;
  } else {
    return false;
  }
}
