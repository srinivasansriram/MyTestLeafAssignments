function countofOccurrences(arr) {
    const occurrences = {};
  
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      let count = 0;
  
      // Check the occurrences of the current element
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === currentElement) {
          count++;
        }
      }
  
      // Store the count in the occurrences object
      occurrences[currentElement] = count;
    }
  
    return occurrences;
  }
  
  // Example usage
  const inputArray = [1, 2, 3, 2, 4, 1, 5, 6, 4, 7];
  const occurrences = countofOccurrences(inputArray);
  
  console.log(occurrences);