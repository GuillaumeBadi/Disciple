
import { expect } from 'chai'
import { mult, even } from '../exercices/ex07'

describe('Ex07', () => {

  it('Should multiply all numbers by the given parameter', () => {

    const tab = [1,2,3,4,5]
    expect(mult(tab)).to.equal([2, 4, 6, 8, 10])
    expect(mult([...tab, 6])).to.equal([2, 4, 6, 8, 10, 12])
  })

  it('Should keep only the even numbers', () => {

    const tab = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(even(tab)).to.equal([2, 4, 6, 8])

    const tab2 = [9, 8, 7, 6, 5]
    expect(even(tab)).to.equal([8, 6])

    expect(mult(even(tab2))).to.equal([16, 12])
  })
})
