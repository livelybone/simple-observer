/**
 * Publisher - Subscriber model
 * */
import { findIndex, getUniqueId } from './utils'

export default function PublishSubscribe() {
  var that = this
  var subscribers = []

  /**
   * @method publish
   * @desc for publishing data
   * */
  that.publish = function() {
    var args = arguments

    subscribers.forEach(function(subscriber) {
      subscriber.callback.apply(that, args)
    })
  }

  /**
   * @method subscribe
   * @param { Function } subscriber
   * @desc subscribe the data provided by subscriber
   * */
  that.subscribe = function(subscriber) {
    var id = getUniqueId(function(id) {
      return findIndex(subscribers, function(item) {
        return item.id === id
      }) !== undefined
    })
    subscribers.push({ id: id, callback: subscriber })
    console.log('simple-observer: Start subscribe!')
    return id
  }

  /**
   * @method unsubscribe
   * @param { String | Function | Array<String|Function> } ids
   * @desc unsubscribe the subscriber via id
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
}