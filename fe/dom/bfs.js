; (function (window) {
  var depth = 0
  var queue = [
  ]
  var bfs = function (node,childKey,cb) {
    if (!node) return
    queue.push({
      node: node,
      depth: depth
    })
    while(queue.length) {
      var head = queue.shift()
      var children

      cb(head.node, head.depth)
      
      if(!head.node[childKey].length) continue
      
      children = head.node[childKey]
      
      children = Array.prototype.slice.call(children, 0)
      
      children.forEach(function(ele, index, arr) {
        depth++
        queue.push({
          node: ele,
          depth: depth
        })
      })
      
    }
  }

  window.bfs = bfs

})(window)
