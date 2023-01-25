function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let pointer = -1;

    for (let j = i - 1; j >= 0; j--) {
      if (array[i] < array[j]) {
        pointer = j;
        console.log('Pointer is at ' + j);
      }
    }
    if (pointer !== -1) {
      array.splice(pointer, 0, array[i]);
      array.splice(i + 1, 1);
    }
    console.log(array);
  }
}
