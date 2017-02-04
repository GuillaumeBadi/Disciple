
import { expect } from 'chai'
import check, { Person } from '../exercices/ex06'

describe('Ex06', () => {

  it('Should provide a context to the callback', done => {

    const func = function (fnName) {
      expect(this.name).to.equal('Guillaume')
      expect(fnName).to.equal('func')
      done()
    }

    check(func)
  })

  it('Should create a constructor called Person', () => {

    const guillaume = new Person('guillaume', 23)

    expect(guillaume.__proto__.levelUp).to.be.a('function')

    expect(guillaume.name).to.equal('guillaume')
    expect(guillaume.age).to.equal(23)

    guillaume.levelUp()
    expect(guillaume.age).to.equal(24)
  })
})
