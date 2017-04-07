export default function isConnectedGraph(graph) {
  if(typeof graph !== 'object') {
    throw new Error('Input is not an object')
  }

  let visited = []
  let allVertexes = Object.keys(graph)

  const traverse = (vertex) => {
    if(!visited.includes(vertex)) {
      visited.push(vertex)
      let destinations = graph[vertex]
      destinations.forEach((element) => {
        traverse(element)
      })
    }
  }

  traverse(allVertexes[0])

  if (visited.length === allVertexes.length) {
    return true
  }

  return false
}
