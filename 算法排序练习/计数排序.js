const countArray = [2, 543, 21, 9, 21, 0, 32, 11, 5213, 765, 32, 12]


// 1. 建立 hash 表
// 2. 找到最大值
// 3. 遍历数组,查看是否在 hash 表中,在则+1,不在则=1
// 4. 遍历 hash 表
const countSort = (arr) => {
  let hashTable = []
  let max = 0
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hashTable)) {
      hashTable[arr[i]] = 1
    } else {
      hashTable[arr[i]] += 1
    }
  }
  for (let key = 0; key <= max; key++) {
    if (key in hashTable) {
      for (let j = 0; j < hashTable[key]; j++) {
        newArr.push(key)
      }
    }
  }
  return newArr
}


console.log(countSort(countArray));