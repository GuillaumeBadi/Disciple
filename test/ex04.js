import { expect } from 'chai'
import asyncInc from '../exercices/ex04'

describe('Ex04', () => {

  it('Should increment the number after 1s', done => {
     asyncInc(1, result => {
      expect(result).to.equal(2)
      done()
    })
  })
})
