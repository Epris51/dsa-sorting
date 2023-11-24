function pivot(arr, start = 0, end = arr.length - 1) {
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
        swapIdx++;
        [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]]; // ES6 swap
      }
    }
  
    // Swap the starting element (pivot) with the swapIdx
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
  }
  
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = pivot(arr, left, right); // returns pivot index
      // Recursively apply the same logic to the left and right subarrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  }
    

module.exports = quickSort;