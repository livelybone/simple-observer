/**
 * Observer model
 * */
import { findIndex } from './utils'

export function Subject() {
  var that = this
  var observers = []

  /**
   * @method addObserver
   * */
  that.addObserver = function(observer) {
    observers.push(observer)
    console.log('simple-observer: Add observer success!')
  }

  /**
   * @method removeObserver
   * */
  that.removeObserver = function(observer) {
    var index = findIndex(observers, function(item) {
      return item === observer
    })
    if (index !== undefined) observers.splice(index, 1)
    console.log('simple-observer: Remove observer success!')
  }

  /**
   * @method notify
   * @desc Notify the observers with data
   * */
  that.notify = function() {
    var args = arguments
    observers.forEach(function(observer) {
      observer.update.apply(that, args)
    })
  }

  /**
   * @method getSubscribersCount
   * @desc Get the number of observers
   * */
  that.getObserversCount = function() {
    return observers.length
  }
}

/**
 * @function Observer
 * @param { Function } callback
 * */
export function Observer(callback) {
  var that = this

  that.update = function() {
    callback.apply(that, arguments)
  }
}