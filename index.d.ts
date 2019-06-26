type ObserverCb = (...args: any[]) => any | void

export class Observer {
  constructor(callback: ObserverCb)
}

export class Subject {
  private observers: Observer[]

  addObserver(observer: Observer): void

  removeObserver(observer: Observer): void

  /**
   * Notify the observers with data
   * */
  notify(...args: any[]): void

  /**
   * Get the number of observers
   * */
  getObserversCount(): number
}

type SubscribeFn = (...args: any[]) => any | void
type SubscriberId = string

interface Subscriber {
  id: SubscriberId
  callback: SubscribeFn
}

export class PublishSubscribe {
  private subscribers: Subscriber[]

  subscribe(subscribeFn: SubscribeFn): SubscriberId

  unsubscribe(ids: SubscribeFn | SubscriberId | Array<SubscribeFn | SubscriberId>): SubscriberId

  /**
   * Publishing data
   * */
  publish(...args: any[]): void

  /**
   * Get the number of subscribers
   * */
  getSubscribersCount(): number
}