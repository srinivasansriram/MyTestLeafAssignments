function moveZeroes(nums) {
    let nonZeroIndex = 0;
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      // If the current element is non-zero
      if (nums[i] !== 0) {
        // Swap the current element with the next non-zero position
        [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];
        nonZeroIndex++;
      }
    }
  }
  
  // Example usage
  const nums = [0, 1, 0, 3, 12];
  console.log("Before Moving [ " + nums  + " ]");
  moveZeroes(nums);
  
  console.log(nums);