
import { expect } from 'chai'
import check from '../exercices/ex02'

describe('Ex02', () => {

  it('Should be enough to drink', () => {
    expect(check(19)).to.equal(true)
  })

  it('Should be enough to drink', () => {
    expect(check(18)).to.equal(true)
  })

  it('Should be too young to drink', () => {
    expect(check(17)).to.equal(false)
  })
})
