function findMaxMinIndices(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let maxIndex = 0;
    let minIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i;
      }
  
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
  
    return { maxIndex, minIndex };
  }
  
  
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  
  const { maxIndex, minIndex } = findMaxMinIndices(numbers);
  
  console.log(`Maximum element index: ${maxIndex}, Maximum element: ${numbers[maxIndex]}`);
  console.log(`Minimum element index: ${minIndex}, Minimum element: ${numbers[minIndex]}`);
