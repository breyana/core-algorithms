function distance(pair1, pair2) {
  const xDistance = Math.abs(pair1[0] - pair2[0])
  const yDistance = Math.abs(pair1[1] - pair2[1])
  const pointDistance = Math.sqrt(xDistance * xDistance + yDistance * yDistance)
  return pointDistance
}

export default function closestPair(points) {
  if (!Array.isArray(points)) {
    throw new Error('Input is not an array')
  }

  let result = {
    pair: [],
    distance: Infinity
  }

  if (points.length <= 1) {
    result.pair = [points[0]]
    return result
  }

  for(let i = 0; i < points.length-1; i++) {
    for(let j = i + 1; j < points.length; j++) {
      let currentDistance = distance(points[i], points[j])
      if (currentDistance < result.distance) {
        result.pair = [points[i], points[j]]
        result.distance = currentDistance
      }
    }
  }

  return result
}
