function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let pointer = array[i];

    for (var j = i - 1; j >= 0 && array[j] > pointer; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = pointer;
    console.log(array);
  }
}
