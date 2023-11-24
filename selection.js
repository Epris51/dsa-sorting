function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      // Assume the first element is the smallest
      let lowest = i;
  
      // Test against items after i to find the smallest
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
  
      // If the smallest number is not the number (i) itself, swap them
      if (i !== lowest) {
        [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
      }
    }
  
    return arr;
  }
  
  module.exports = selectionSort;
  