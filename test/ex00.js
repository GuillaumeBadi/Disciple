
import { expect } from 'chai'
import exercice, { add, divide, multiply } from '../exercices/ex00'

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

})
