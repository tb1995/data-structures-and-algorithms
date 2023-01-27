function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minPointer;
    for (let j = i + 1; j < array.length; j++) {
      if (min > array[j]) {
        min = array[j];
        minPointer = j;
      }
    }

    if (min !== array[i]) {
      let temp = array[i];
      array[minPointer] = temp;
      array[i] = min;
    }
  }
}
//
