function mergeArrays(array1, array2) {
  let returnArray = [];
  let counter1 = 0,
    counter2 = 0;
  let i = 0,
    j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[counter1] < array2[counter2]) {
      returnArray.push(array1[counter1]);
      counter1++;
    } else if (array1[counter1] > array2[counter2]) {
      returnArray.push(array2[counter2]);
      counter2++;
    } else if (array1[counter1] === array2[counter2]) {
      returnArray.push(array2[counter2]);
      returnArray.push(array1[counter1]);
      counter1++;
      counter2++;
      i++;
    }
  }

  while (i < array1.length) {
    returnArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    returnArray.push(array2[j]);
    j++;
  }
  return returnArray;
}
