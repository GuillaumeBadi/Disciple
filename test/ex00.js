
import { expect } from 'chai'
import exercice, { add, divide } from '../exercices/ex00'

describe('Ex00', () => {

  it('Should Export default the add function', () =>
    expect(exercice).to.be.a('function')
  )

  it('Should Export the divide function', () => (
    expect(divide).to.be.a('function')
  ))

  it('Should Export the add function', () => (
    expect(add).to.be.a('function')
  ))

  it('Should add two numbers', () => (
    expect(add(1,2)).to.equal(3)
  ))

  it('Should add two numbers', () => (
    expect(exercice(1,2)).to.equal(3)
  ))

  it('Should divide two numbers', () => (
    expect(divide(4, 2)).to.equal(2)
  ))

})
