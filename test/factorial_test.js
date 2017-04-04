import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('should return the factorial of a number', function(){
    expect(factorial(2)).to.equal(2)
    expect(factorial(11)).to.equal(39916800)
  })

  it('should return an error if input is not a number', function(){
    expect(() => factorial("word")).to.throw(Error, 'Input is not a number')
  })

})
