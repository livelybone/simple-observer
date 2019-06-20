/**
 * Observer model
 * */
import { findIndex } from './utils'

export function Subject() {
  var that = this
  var observers = []

  that.addObserver = function(observer) {
    observers.push(observer)
    console.log('simple-observer: Add observer success!')
  }

  that.removeObserver = function(observer) {
    var index = findIndex(observers, observer)
    if (index !== undefined) observers.splice(index, 1)
    console.log('simple-observer: Remove observer success!')
  }

  that.notify = function() {
    var args = arguments
    observers.forEach(function(observer) {
      observer.update.apply(that, args)
    })
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