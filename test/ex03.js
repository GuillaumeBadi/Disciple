
import { expect } from 'chai'
import apply from '../exercices/ex03'

describe('Ex03', () => {

  it ('Should increment the number', () => {
    const inc = v => v + 1
    expect(apply(inc, 1)).to.equal(2)
    expect(apply(inc, -1)).to.equal(0)
    expect(apply(inc, 2)).to.equal(3)
  })

  it('Should decrement the number', () => {
    const dec = v => v - 1
    expect(apply(dec, 0)).to.equal(-1)
    expect(apply(dec, 1)).to.equal(0)
  })
})
