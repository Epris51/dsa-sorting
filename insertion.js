function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      let j;
  
      // Iterate through the sorted portion and find the correct position for the current element.
      for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
  
      // Place the current element at the correct position.
      arr[j + 1] = currentVal;
    }
  
    return arr;
  }
  
  module.exports = insertionSort;
  