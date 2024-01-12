const name1 = "listen";
const name2 = "silent";

function isAnagramcheck(name1, name2) {
    
    const val1 = name1.toLowerCase();
    const val2 = name2.toLowerCase();

    if (val1.length !== val2.length) {
        return false;
      }

      const sortedStr1 = val1.split('').sort().join('');
      const sortedStr2 = val2.split('').sort().join('');
    
      return sortedStr1 === sortedStr2;

}

if (isAnagramcheck(name1, name2)) {
    console.log(`${name1} and ${name2} are anagrams.`);
  } else {
    console.log(`${name1} and ${name2} are not anagrams.`);
  }