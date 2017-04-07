import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('should return an array of Fibonacci numbers', function(){
    expect(fibonacci(2)).to.be.a('array')
    expect(fibonacci(0)).to.be.null
    expect(fibonacci(1)).to.deep.equal([0])
    expect(fibonacci(2)).to.deep.equal([0,1])
    expect(fibonacci(10)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  it('should return an error if input is not a number', function(){
    expect(() => fibonacci("word")).to.throw(Error, 'Input is not a number')
  })

})
