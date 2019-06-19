function generateID() {
  return Math.random().toFixed(6)
}

/**
 * @param { Array } arr
 * @param value
 * @return Number
 * */
function findIndex(arr, value) {
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
 * @function Observer
 * @param { Function } callback
 * */
export default function Observer(callback) {
  if (typeof callback !== 'function') {
    throw new Error('simple-observer: Param callback of constructor is invalid, must be a function')
  }

  var that = this
  var subscribers = {}
  var subscriberIds = []

  function publisher() {
    var args = arguments

    subscriberIds.forEach(function(id) {
      subscribers[id].apply(that, args)
    })
  }

  function getUniqueId() {
    var id

    do {
      id = generateID()
    } while (findIndex(subscriberIds, id) !== undefined)

    return id
  }

  /**
   * @method subscribe
   * @param { Function } callback
   * */
  that.subscribe = function(callback) {
    var id = getUniqueId()
    subscriberIds.push(id)
    subscribers[id] = callback
    return id
  }

  /**
   * @method unsubscribe
   * @param { String | Array<String> } ids
   * */
  that.unsubscribe = function(ids) {
    var arr = typeof ids === 'string' ? [ids] : ids
    arr.forEach(function(id) {
      var index = findIndex(subscriberIds, id)
      if (index !== undefined) {
        subscriberIds.splice(index, 1)
        subscribers[id] = undefined
      }
    })
    console.log('simple-observer: Unsubscribe success!')
  }

  /**
   * @method destroy
   * @desc Memory release
   * */
  that.destroy = function() {
    callback(null)
    subscribers = {}
    subscriberIds = []
  }

  callback(publisher)
}