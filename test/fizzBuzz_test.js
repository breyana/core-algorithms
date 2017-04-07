import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of 100 numbers', function(){
    expect(fizzBuzz()).to.be.an('array')
    expect(fizzBuzz().length).to.equal(100)
    expect(fizzBuzz()[100]).to.be.undefined
  })

  it('returns Fizz for multiples of three', function(){
    expect(fizzBuzz()[2]).to.deep.equal('Fizz')
    expect(fizzBuzz()[32]).to.deep.equal('Fizz')
    expect(fizzBuzz()[62]).to.deep.equal('Fizz')
    expect(fizzBuzz()[98]).to.deep.equal('Fizz')
  })

  it('returns Buzz for multiples of five', function(){
    expect(fizzBuzz()[9]).to.deep.equal('Buzz')
    expect(fizzBuzz()[19]).to.deep.equal('Buzz')
    expect(fizzBuzz()[54]).to.deep.equal('Buzz')
    expect(fizzBuzz()[99]).to.deep.equal('Buzz')
  })

  it('returns FizzBuzz for multiples of both three and five', function(){
    expect(fizzBuzz()[14]).to.deep.equal('FizzBuzz')
    expect(fizzBuzz()[29]).to.deep.equal('FizzBuzz')
    expect(fizzBuzz()[74]).to.deep.equal('FizzBuzz')
    expect(fizzBuzz()[89]).to.deep.equal('FizzBuzz')
  })
  it('returns expected number if neither a multiple of three or five', function(){
    expect(fizzBuzz()[10]).to.deep.equal(11)
    expect(fizzBuzz()[51]).to.deep.equal(52)
    expect(fizzBuzz()[75]).to.deep.equal(76)
    expect(fizzBuzz()[91]).to.deep.equal(92)
  })
})
