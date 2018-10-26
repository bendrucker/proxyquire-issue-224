const proxyquire = require('proxyquire')
const assert = require('assert')

const original = require('./')

const withCallThru = proxyquire('./', {
  './data.json': {
    hola: 'mundo'
  }
})

const noCallThru = proxyquire.noCallThru()('./', {
  './data.json': {
    hola: 'mundo'
  }
})

assert.deepEqual(original, {
  hello: 'world'
})

assert.deepEqual(withCallThru, {
  hello: 'world',
  hola: 'mundo'
})

assert.deepEqual(noCallThru, {
  hola: 'mundo'
})

console.log('All assertions passed')