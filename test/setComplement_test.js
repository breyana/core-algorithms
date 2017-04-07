import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function(){
  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })
  it('return the complement of two sets', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setComplement(a, b)).to.deep.equal([6, 8])
  })
  it('returns the entire second set if no matches', function(){
    const a = [1, 2, 3, 4]
    const b = [5, 6, 7, 8]
    expect(setComplement(a, b)).to.deep.equal([5, 6, 7, 8])
  })
  it('returns an empty array if there are no differences', function(){
    const a = [1, 2, 3, 4]
    const b = [1, 2, 3, 4]
    expect(setComplement(a, b)).to.deep.equal([])
  })
  it('should return an error if inputs are not arrays', function(){
    expect(() => setComplement("bird", 4)).to.throw(Error, 'Input is not an array')
  })

  it('should return an error if one or less inputs are given', function(){
    expect(() => setComplement([NaN, 1, 2])).to.throw(Error, 'Requires two array inputs')
  })
})
