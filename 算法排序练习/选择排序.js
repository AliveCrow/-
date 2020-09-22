
console.log([2, 543, 21, 9, 21, 0, 32, 11, 5213, 765, 32, 12]);
let array = [2, 543, 21, 9, 21, 0, 32, 11, 5213, 765, 32, 12]
//先求出最小值
const min = (arr) => {
  if (arr.length > 2) {
    return min([arr[0], min(arr.slice(1))])
  } else {
    return Math.min(arr[0], arr[1])
  }
}

//求出最小值的index
const minIndex = (arr) => {
  for (i = 0; i < arr.length; i++) {
    return arr.indexOf(min(arr))
  }
}

//选择排序
let selectSort = (arr) => {
  if (arr.length > 2) {
    let minNum = min(arr)
    let minIn = minIndex(arr)
    arr.splice(minIn, 1)
    // console.log(arr.splice(minIn, 1)); //会返回删掉的数组的下标
    return [minNum].concat(selectSort(arr))
  } else {
    return arr[0] < arr[1] ? arr : arr.reverse()
  }
}
console.log(selectSort(array));