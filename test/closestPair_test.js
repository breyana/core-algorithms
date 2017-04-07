import { expect } from 'chai'
import closestPair from '../src/closestPair'

describe('closestPair()', function(){
  it('should be a function', function(){
    expect(closestPair).to.be.a('function')
  })

  it('return the pair of points with the least distance between them.', function(){
    const points = [
      [2,1],
      [4,0],
      [-1,0],
      [5,3],
      [-2,5],
      [3,-3],
      [-2,0],
      [3,4],
      [5,-4],
      [0,-2]
    ]

    expect(closestPair(points)).to.be.a('object')
    expect(closestPair(points))
      .to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })

  it('should return an object with the distance Infinity if only one point is given',
    function(){
    const points = [[2,1]]

    expect(closestPair(points))
      .to.deep.equal({ pair: [[2,1]], distance: Infinity })
  })

  it('should return an error if the input is not an array', function(){
    expect(() => closestPair("pancake")).to.throw(Error, 'Input is not an array')
  })

})
