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
    
      for(var i = 0, len = children.length; i < len; i++) {
        depth++
        queue.push({
          node: children[i],
          depth: depth
        })
      }
    
    }
  }

  window.bfs = bfs

})(window)
