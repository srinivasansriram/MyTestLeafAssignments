const name1 = "malayalam";

function ispalindrome(name1) {

    const newname = name1.toLowerCase();

    var i =0;
    var j = newname.length - 1;

    while (i < j) {

        if (newname[i] !== newname[j]) {
            return false; // Not a palindrome
          }

          i++;
          j--;
  }

  return true; // It's a palindrome

        
    }
    
    if (ispalindrome(name1)) {
        console.log(`${name1} is a palindrome.`);
      } else {
        console.log(`${name1} is not a palindrome.`);
      }