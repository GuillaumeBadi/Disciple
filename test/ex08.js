
import check from '../exercices/ex08'
import { expect } from 'chai'

describe('Ex08', () => {

  it('should return a 200 status code', done => {

    check('http://www.ismycomputeron.com/', status => {
      expect(status).to.equal(200)
      done()
    })
  })
})
