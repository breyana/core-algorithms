import { expect } from 'chai'
import isConnectedGraph from '../src/isConnectedGraph'

describe('isConnectedGraph()', function(){
  it('should be a function', function(){
    expect(isConnectedGraph).to.be.a('function')
  })

  it('return true if the graph is connected', function(){
    const graphA = {
      'a': ['b', 'c'],
      'b': ['a', 'd'],
      'c': ['a', 'd'],
      'd': ['b', 'c'],
    }

    expect(isConnectedGraph(graphA)).to.be.true
  })

  it('returns false if graph is not connected.', function(){
    const graphB = {
      'a': ['b'],
      'b': ['a'],
      'c': ['d'],
      'd': ['c'],
    }

    expect(isConnectedGraph(graphB)).to.be.false
  })

  it('should return an error if the input is not an object', function(){
    expect(() => isConnectedGraph("disconnect")).to.throw(Error, 'Input is not an object')
  })

})
