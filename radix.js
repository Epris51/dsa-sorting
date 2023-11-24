function radixSort(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
      return nums;
    }
  
    // Helper function to get the digit at a given place
    const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  
    // Helper function to count the number of digits in a number
    const digitCount = num => {
      if (num === 0) return 1;
      return Math.floor(Math.log10(Math.abs(num))) + 1;
    };
  
    // Helper function to find the max digit count in an array of numbers
    const mostDigits = nums => {
      let maxDigits = 0;
      for (let num of nums) {
        maxDigits = Math.max(maxDigits, digitCount(num));
      }
      return maxDigits;
    };
  
    const maxDigitCount = mostDigits(nums);
  
    for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        let digit = getDigit(nums[i], k);
        digitBuckets[digit].push(nums[i]);
      }
      nums = [].concat(...digitBuckets);
    }
  
    return nums;
  }
  
  module.exports = radixSort;
  