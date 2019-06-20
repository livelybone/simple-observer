/**
 * @function generateID
 * @return
 * */
export function generateID() {
  return Math.random().toFixed(6)
}

/**
 * @function findIndex
 * @param { Array } arr
 * @param value
 * @return Number
 * */
export function findIndex(arr, value) {
  var index

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      index = i
      break
    }
  }

  return index
}

/**
 * @function findIndex
 * @param { Array } arr
 * @param { String | Number } key
 * @param value
 * @return Number
 * */
export function findIndexByKey(arr, key, value) {
  var index

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      index = i
      break
    }
  }

  return index
}

/**
 * @function getUniqueId
 * @param { Function } judgeFn
 * */
export function getUniqueId(judgeFn) {
  var id

  do {
    id = generateID()
  } while (judgeFn(id))

  return id
}