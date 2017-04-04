import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true if string is a palindrome', function(){
    expect(isPalindrome('tacocat')).to.be.true
  })

  it('returns false if string is not a palindrome', function(){
    expect(isPalindrome('banana pancakes')).to.be.false
  })

  it('ignores punctuation, spacing, and case sensitivity', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
  })
})
