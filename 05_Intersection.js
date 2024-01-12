  function intersection(nums1, nums2) {
    const result = [];
  
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
          result.push(nums1[i]);
          break;
        }
      }
    }
  
    return result;
  }
  
  const nums1 = [1, 2, 2, 1];
  const nums2 = [2, 2, 3];
  
  const resultArray = intersection(nums1, nums2);
  console.log(resultArray);