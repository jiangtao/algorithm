/**
 * https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%BC%AF%E8%B7%9D%E9%9B%A2
 * https://arch-long.cn/articles/algorithm/Levenshtein%E8%B7%9D%E7%A6%BB.html
 * edit(m, n) = Math.min(
 *    edit(m, n - 1) + 1,
 *    edit(n - 1, m) + 1,
 *    edit(m - 1, n - 1) + f
 * )
 *
 * f
 *
 * @param {*} a
 * @param {*} b
 * @returns distance matrix[m - 1, n - 1] 开始插入 0 0
 */
function getEditDistance(a,b) {
  var lenA = a.length
  var lenB = b.length

  if (lenA === 0) return lenB
  if (lenB === 0) return lenA

  var matrix = []
  var m,n,f
  for (m = 0;m <= lenA;m++) {
    matrix[m] = []

    for (n = 0;n <= lenB;n++) {
      if (n === 0) {
        matrix[m][n] = m
      } else if (m === 0) {
        matrix[m][n] = n
      } else {
        f = a[m - 1] == b[n - 1] ? 0 : 1

        matrix[m][n] = Math.min(
          matrix[m - 1][n] + 1,
          matrix[m][n - 1] + 1,
          matrix[m - 1][n - 1] + f
        )
      }
    }
  }

  return matrix[m - 1][n - 1]
}


function assert(a,b,v) {
  console.assert(
    getEditDistance(a,b) === v,
    a + ' to ' + b
  )
}



assert('b','b',0)
assert('a','b',1)
assert('ab', 'b', 1)
assert('abb', 'b', 2)
assert('abc', 'b', 2)
