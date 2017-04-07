import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){
  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('should return the intersection of two sets', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setIntersection(a, b)).to.be.a('array')
    expect(setIntersection(a, b)).to.deep.equal([2, 4])
  })
  it('returns an empty array if there is no intersection', function(){
    const a = [1, 2, 3, 4]
    const b = [5, 6, 7, 8]
    expect(setIntersection(a, b)).to.deep.equal([])
  })
  it('returns an array when the arrays are identical', function(){
    const a = [1, 2, 3, 4]
    const b = [1, 2, 3, 4]
    expect(setIntersection(a, b)).to.deep.equal([1, 2, 3, 4])
  })
  it('should return an error if inputs are not arrays', function(){
    expect(() => setIntersection("word", 2)).to.throw(Error, 'Input is not an array')
  })

  it('should return an error if one or less inputs are given', function(){
    expect(() => setIntersection([3,2,1])).to.throw(Error, 'Requires two array inputs')
  })
})
