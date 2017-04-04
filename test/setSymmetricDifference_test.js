import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){
  it('should be a function', function(){
    expect(setSymmetricDifference).to.be.a('function')
  })
  it('return the symmetric difference of two sets', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setSymmetricDifference(a, b)).to.deep.equal([1, 3, 6, 8])
  })
  it('should return an error if inputs are not arrays', function(){
    expect(() => setSymmetricDifference("bird", 4)).to.throw(Error, 'Input is not an array')
  })
  it('should return an error if one or less inputs are given', function(){
    expect(() => setSymmetricDifference([true, 1, 2])).to.throw(Error, 'Requires two array inputs')
  })
})
