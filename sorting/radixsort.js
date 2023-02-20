function getDigits(number, position) {
  number = number + '';
  if (
    isNaN(parseInt(number.charAt(number.length - (1 + position)))) === false
  ) {
    return parseInt(number.charAt(number.length - (1 + position)));
  }
  return 0;
}

function getDigitFancy(number, position) {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
}

function countDigits(number) {
  let digits = 0;
  while (Math.floor(Math.abs(number)) >= 1) {
    number = number / 10;
    digits++;
  }

  return digits;
}

function mostDigits(array) {
  let maxDigits = countDigits(array[0]);
  for (let index = 1; index < array.length; index++) {
    maxDigits = Math.max(countDigits(array[index]), maxDigits);
  }

  return maxDigits;
}

function radixsort(array) {
  let maxDigits = mostDigits(array);
  for (let i = 0; i < maxDigits; i++) {
    let bucket = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < array.length; j++) {
      bucket[getDigits(array[j], i)].push(array[j]);
    }
    array = [].concat(...bucket);
  }
  return array;
}
