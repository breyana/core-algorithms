import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function(){
  it('should be a function', function(){
    expect(mergeSort).to.be.a('function')
  })

  it('sort an array of numbers', function(){
    expect( mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]) ).to.be.a('array')
    expect( mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]) )
      .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should return an error if inputs are not arrays', function(){
    expect(() => mergeSort("word", 2)).to.throw(Error, 'Input is not an array')
  })

})
