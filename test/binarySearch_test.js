import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', function(){
  it('should be a function', function(){
    expect(binarySearch).to.be.a('function')
  })

  it('should return specified index from the array', function(){
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

    expect(binarySearch(numbers, 45)).to.be.a('number')
    expect(binarySearch(numbers, 45)).to.deep.equal(8)
  })

  it('element to search for is not in the array', function(){
    const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

    expect(() => binarySearch(numbers, 100))
      .to.throw(Error, 'Searched Element is not in given array')
  })

  it('should return an error if inputs are not arrays', function(){
    expect(() => binarySearch("word", 2)).to.throw(Error, 'Input is not an array')
  })

  it('should return an error if one or less inputs are given', function(){
    expect(() => binarySearch([3,2,1]))
      .to.throw(Error, 'Binary Search requires two parameters: array and number to search for')
  })

})
