function lengthofLastWord(str) {

str = str.trim();

let lastSpaceIndex = str.lastIndexOf(' ');

if (lastSpaceIndex === -1) {
    return { length: str.length, lastWord: str };
  }

  let lastWord = str.substring(lastSpaceIndex + 1);
  return { length: lastWord.length, lastWord: lastWord };
}
    
let inputString = "   Hello World   ";
let result = lengthofLastWord(inputString);
console.log("The last word " +result.lastWord + " is "  +result.length);


