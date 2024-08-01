function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Loop through all elements in the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // If no elements were swapped in the inner loop, array is sorted
    if (!swapped) break;
  }

  return arr;
}

// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(arr));
