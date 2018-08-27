function generatorID() {
  return Math.random().toFixed(6)
}

function Subscription(observer, id) {
  var that = this
  that.observer = observer
  that.id = id

  that.unsubscribe = function (cb) {
    var index = Object.keys(that.observer.subscribes)
      .find(function (k) {
        return that.observer.subscribes[k].id === that.id
      })
    that.observer.subscribes.splice(index, 1)
    if (typeof cb === 'function') cb()
    console.log('simple-observer: Subscription: Unsubscribe success!')
  }
}

/**
 * @method unsubscribeAll
 * @params {Array<Subscription>} arr
 * */
function unsubscribeAll(arr) {
  arr.forEach(function (item) {
    if (item instanceof Subscription) {
      item.unsubscribe()
    }
  })
}

/**
 * @function Subscribe
 * @param {generator} generator
 * */
function Observer(generator) {
  if (typeof generator !== 'function') {
    throw new Error('simple-observer: Observer: Params generator of constructor is invalid, must be a function')
  }

  var that = this
  that.subscribes = []

  var next = function () {
    var args = arguments
    that.subscribes.map(function (cb) {
      cb.callback.apply(that, args)
    })
  }

  that.subscribe = function (callback) {
    var id = generatorID()
    var index = 0

    var exec = function (i) {
      return that.subscribes[i].id === id
    }

    do {
      index = Object.keys(that.subscribes)
        .find(exec)
      id = generatorID()
    } while (index !== undefined)

    that.subscribes.push({ id: id, callback: callback })
    return new Subscription(that, id)
  }

  generator(next)
}

exports.Subscription = Subscription
exports.unsubscribeAll = unsubscribeAll
exports.Observer = Observer