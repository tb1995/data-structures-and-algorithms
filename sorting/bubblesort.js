function bubbleSort(array) {
  for (let index = array.length; index >= 0; index--) {
    for (let j = index - 1; j >= 0; j--) {
      if (array[index] < array[j]) {
        let temp = array[index];
        array[index] = array[j];
        array[j] = temp;
      }
    }
  }
}
