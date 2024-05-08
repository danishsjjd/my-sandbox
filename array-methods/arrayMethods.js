const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}
const map = (arr, callback) => {
  let newElement = []
  let latestValue
  for (let i = 0; i < arr.length; i++) {
    latestValue = callback(arr[i], i, arr)
    newElement = [...newElement, latestValue]
  }
  return newElement
}

const find = (arr, callback) => {
  let isFind = false
  let findValueIndex
  for (let i = 0; i < arr.length; i++) {
    if (isFind) break
    let currentI = callback(arr[i], i, arr)
    if (currentI) {
      isFind = true
      findValueIndex = i
    }
  }
  return arr[findValueIndex]
}

const every = (arr, callback) => {
  let isTruthy = true
  for (let i = 0; i < arr.length; i++) {
    if (!isTruthy) break
    isTruthy = callback(arr[i], i, arr)
  }
  return isTruthy
}

const some = (arr, callback) => {
  let isTruthy = false
  for (let i = 0; i < arr.length; i++) {
    if (isTruthy) break
    isTruthy = callback(arr[i], i, arr)
  }
  return isTruthy
}

const filter = (arr, callback) => {
  let returnedArr = []
  for (let i = 0; i < arr.length; i++) {
    const isTruthy = callback(arr[i], i, arr)
    if (isTruthy) returnedArr = [...returnedArr, arr[i]]
  }
  return returnedArr
}

// below 2 are not written by me
const reduce = (arr, callback, acc) => {
  let returnedArr = acc
  for (let i = 0; i < arr.length; i++) {
    if (acc == null && i === 0) {
      returnedArr = arr[0]
    } else {
      returnedArr = callback(returnedArr, arr[i], i, arr)
    }
  }
  return arr
}

const flat = (array, depth = 1) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (Array.isArray(element) && depth > 0) {
      newArray.push(...flat(element, depth - 1))
    } else {
      newArray.push(element)
    }
  }
  return newArray
}

module.exports = { forEach, map, find, every, some, filter, reduce, flat }
