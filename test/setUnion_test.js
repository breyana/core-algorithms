import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){
  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('should return the union of two sets', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]

    expect(setUnion(a, b)).to.be.a('array')
    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 6, 8])
  })

  it('returns an array if there are no differences', function(){
    const a = [1, 2, 3, 4]
    const b = [1, 2, 3, 4]
    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4])
  })

  it('should return an error if inputs are not arrays', function(){
    expect(() => setUnion("word", 2)).to.throw(Error, 'Input is not an array')
  })

  it('should return an error if one or less inputs are given', function(){
    expect(() => setUnion([3,2,1])).to.throw(Error, 'Requires two array inputs')
  })

})
