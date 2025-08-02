const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    
    let j = i - 1;

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const sorted = insertionSort([0, -10, 3, 2, 51, 21, 34]);
console.log(JSON.stringify(sorted));