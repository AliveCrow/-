
let quickArray = [2, 543, 21, 9, 21, 0, 32, 11, 5213, 765, 32, 12]

const quickSort = (arr) => {
  if (arr.length < 2) { return arr }
  //先找基准
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(quickArray));