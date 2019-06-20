# @livelybone/simple-observer
A simple observer implement

## repository
https://github.com/livelybone/simple-observer.git

## Installation
```bash
npm i -S @livelybone/simple-observer
```

## Global name
`SimpleObserver`

## Usage
> Observer model
```js
import { Subject, Observer } from '@livleybone/simple-observer'

const subject = new Subject()
const observer = new Observer((...args) => console.log(...args))

// Method -> addObserver
subject.addObserver(observer)

// Method -> notify
// Notify the observers with data
subject.notify(1) // -> console: 1
subject.notify(1, 2) // -> console: 1 2

// Method -> removeObserver
subject.removeObserver(observer)
```

> Publish-Subscribe model
```js
import { PublishSubscribe } from '@livleybone/simple-observer'

const pubSub = new PublishSubscribe()

// Method -> subscribe
// Subscribe the data provided by publisher
const subscriber = (...args) => console.log(...args)
const subscriberId = pubSub.subscribe(subscriber)

// Method -> publish
// Publish data
pubSub.publish(1) // -> console: 1
pubSub.publish(1, 2) // -> console: 1 2

// Method -> unsubscribe
// Unsubscribe the subscriber via id or callback function of subscriber
pubSub.unsubscribe(subscriberId)
// or pubSub.unsubscribe(subscriber)
```
