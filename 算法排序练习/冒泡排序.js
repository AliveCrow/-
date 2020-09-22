let bubbleArray = [2, 543, 21, 9, 21, 0, 32, 11, 5213, 765, 32, 12]

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let temp = []
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}


console.log(bubbleSort(bubbleArray));