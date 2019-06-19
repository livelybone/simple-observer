# @livelybone/simple-observer
A simple observer implement

## repository
https://github.com/livelybone/simple-observer.git

## Demo
https://github.com/livelybone/simple-observer#readme

## Installation
```bash
npm i -S @livelybone/simple-observer
```

## Global name
`Observer`

## Usage
```js
import Observer from '@livleybone/simple-observer'

var publisher
var observer = new Observer(_publisher => {
  publisher = _publisher
})

// method -> subscribe
// subscribe the data provided by publisher
var subscriberId = observer.subscribe((...args) => console.log(...args))

// Provide data via publisher
publisher(1) // -> console: 1
publisher(1, 2) // -> console: 1 2

// method -> unsubscribe
// unsubscribe the subscriber via id
observer.unsubscribe(subscriberId)

// method -> destroy
// Release memory, so you can safely delete the Observer instance
observer.destroy()
```

```js
// when you want to set this module as external while you are developing another module, you should import it like this
import Observer  from '@livleybone/simple-observer'
```
