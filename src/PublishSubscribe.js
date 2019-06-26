/**
 * Publisher - Subscriber model
 * */
import { findIndex, getUniqueId } from './utils'

export default function PublishSubscribe() {
  var that = this
  var subscribers = []

  /**
   * @method publish
   * @desc For publishing data
   * */
  that.publish = function() {
    var args = arguments

    subscribers.forEach(function(subscriber) {
      subscriber.callback.apply(that, args)
    })
  }

  /**
   * @method subscribe
   * @param { Function } subscribeFn
   * @desc Subscribe the data provided by publisher
   * */
  that.subscribe = function(subscribeFn) {
    var id = getUniqueId(function(id) {
      return findIndex(subscribers, function(item) {
        return item.id === id
      }) !== undefined
    })
    subscribers.push({ id: id, callback: subscribeFn })
    console.log('simple-observer: Start subscribe!')
    return id
  }

  /**
   * @method unsubscribe
   * @param { String | Function | Array<String|Function> } ids
   * @desc Unsubscribe the subscribeFn via id
   * */
  that.unsubscribe = function(ids) {
    var arr = ids instanceof Array ? ids : [ids]
    arr.forEach(function(id) {
      var index = findIndex(subscribers, function(item) {
        return item.id === id || item.callback === id
      })
      if (index !== undefined) subscribers.splice(index, 1)
    })
    console.log('simple-observer: Unsubscribe success!')
  }

  /**
   * @method getSubscribersCount
   * @desc Get the number of subscribers
   * */
  that.getSubscribersCount = function() {
    return subscribers.length
  }
}