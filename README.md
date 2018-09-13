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
`SimpleObserver`

## Usage
```js
import {Subscription, unsubscribeAll, Observer} from '@livleybone/simple-observer'
```

```js
// when you want to set this module as external while you are developing another module, you should import it like this
import * as SimpleObserver  from '@livleybone/simple-observer'

// then use it by need
SimpleObserver.Subscription
SimpleObserver.unsubscribeAll
SimpleObserver.Observer
```

## Functions 

### Subscription
See: https://github.com/livelybone/simple-observer/blob/master/src/index.js#L5-L19

### unsubscribeAll
See: https://github.com/livelybone/simple-observer/blob/master/src/index.js#L21-L31

### Observer
See: https://github.com/livelybone/simple-observer/blob/master/src/index.js#L21-L31
