; (function (window) {
  var count = 0
  var dfs = function (node,childKey,cb) {
    if (!node) return
    cb(node,count++)
    if (node.nodeType == 1) {
      var children = node[childKey]
      if (children && children.length) {
        children = Array.prototype.slice.call(node[childKey],0)
        children.forEach(function (child) {
          dfs(child,childKey,cb)
        })
      }
    }
  }

  window.dfs = dfs

})(window)
