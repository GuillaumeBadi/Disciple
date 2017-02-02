
import { expect } from 'chai'
import { concatenate, getLength } from '../exercices/ex01'

describe('Ex01', () => {

  it('Should concatenate 2 strings', () => {
    expect(concatenate('Hello ', 'World')).to.equal('Hello World')
  })

  it('Should return the length of a string', () => {
    expect(getLength('Hello')).to.equal(5)
  })
})
