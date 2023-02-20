function pivot(array, startIndex = 0, endIndex = array.length + 1) {
  let pivotValue = array[startIndex];
  let pivotIndex = startIndex;
  function swap(array, currentValue, swapIndex) {
    let temp = array[currentValue];
    array[currentValue] = array[swapIndex];
    array[swapIndex] = temp;
  }

  for (var i = startIndex + 1; i < array.length; i++) {
    if (array[i] < pivotValue) {
      pivotIndex++;
      swap(array, i, pivotIndex);
    }
  }

  swap(array, startIndex, pivotIndex);
  return pivotIndex;
}

function quicksort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);

    quicksort(array, left, pivotIndex - 1);
    quicksort(array, pivotIndex + 1, right);
  }

  return array;
}
