
import { expect } from 'chai'
import object from '../exercices/ex05'

describe('Ex05', () => {

  it('Should contain all the needed properties', () => {
    expect(object).to.have.all.keys('age', 'name', 'sayHello')
  })

  it('Should say hello', () => {
    expect(object.sayHello()).to.equal(`Hello ${object.name}`)
    object.name = 'Guillaume'
    expect(object.sayHello()).to.equal(`Hello ${object.name}`)
  })
})
