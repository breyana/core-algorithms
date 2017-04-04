import { expect } from 'chai'
import collatzConjecture from '../src/collatzConjecture'

describe('collatzConjecture()', function(){

  it('should be a function', function(){
    expect(collatzConjecture).to.be.a('function')
  })

  it('should return the collatzConjecture of a number', function(){
    expect(collatzConjecture(1)).to.deep.equal([1])
    expect(collatzConjecture(7)).to.deep.equal([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1])
  })

  it('should return an error if input is not a number', function(){
    expect(() => collatzConjecture("word")).to.throw(Error, 'Input is not a number')
  })

})
