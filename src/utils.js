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
 * @param { Function } judgeFn, (item, index, arr) => boolean
 * @return Number
 * */
export function findIndex(arr, judgeFn) {
  var index

  for (var i = 0; i < arr.length; i++) {
    if (judgeFn(arr[i], i, arr)) {
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