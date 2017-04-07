import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function(){
  it('should be a function', function(){
    expect(bubbleSort).to.be.a('function')
  })
  it('return the sorted array', function(){
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]))
      .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('returns the original array if array is already sorted', function() {
    expect(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
      .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('throws an error if the input is not an array', function() {
    expect(() => bubbleSort('we love cats')).to.throw(Error)
  })
  it('returns sorted array if duplicate values are in the array', function() {
    expect(bubbleSort([5, 3, 9, 2, 5, 4, 1, 6, 7, 8, 2, 6]))
      .to.deep.equal([1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9])
  })
})
