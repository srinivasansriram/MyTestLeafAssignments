function removeDuplicates(arr) {
    const resultArray = [];
    
    for (let i = 0; i < arr.length; i++) {
      let isDuplicate = false;
      
      // Check if the current element is already in the resultArray
      for (let j = 0; j < resultArray.length; j++) {
        if (arr[i] === resultArray[j]) {
          isDuplicate = true;
          break;
        }
      }
      
      // If not a duplicate, add it to the resultArray
      if (!isDuplicate) {
        resultArray.push(arr[i]);
      }
    }
    
    return resultArray;
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 2, 4, 1, 5, 6, 4, 7];
  const resultArray = removeDuplicates(inputArray);
  
  console.log(resultArray);