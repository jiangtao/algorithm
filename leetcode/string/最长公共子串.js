/**
 * wiki: https://zh.wikipedia.org/wiki/%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%AD%90%E4%B8%B2
 * 与 最小编辑距离 问题相关，最长公共子串也可以相似度判定的一种方法
 * @param {*} a
 * @param {*} b
 */
function get(shorter, longer) {

  var temp, j
    , i = 0
    , len = longer.length

  if(shorter.length > longer.length) {
    temp = longer
    longer = shorter
    shorter = temp
    len = temp.length
  }

  temp = ''

  for(; i < len; i++) {
    for(j = len - 1; j > i; j--) {
      temp = shorter.substring(i, j)
      if(longer.indexOf(temp) > -1) {
        return temp
      }
    }
  }
  return temp
}


