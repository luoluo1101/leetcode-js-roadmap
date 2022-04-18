/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 */
/* 有效括号字符串为空 ""、"(" + A + ")" 或 A + B ，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。

  例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
  如果有效字符串 s 非空，且不存在将其拆分为 s = A + B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

  给出一个非空有效字符串 s，考虑将其进行原语化分解，使得：s = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

  对 s 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 s 。

  示例 1：

  输入：s = "(()())(())"
  输出："()()()"
  解释：
  输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
  删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
  示例 2：

  输入：s = "(()())(())(()(()))"
  输出："()()()()(())"
  解释：
  输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
  删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
  示例 3：

  输入：s = "()()"
  输出：""
  解释：
  输入字符串为 "()()"，原语化分解得到 "()" + "()"，
  删除每个部分中的最外层括号后得到 "" + "" = ""。
 */


// 思路：拆分成原语，删掉最外层括号
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let stack = [] //原语栈
  let res = [] //脱掉外层括号
  let num = 0 //用于计数，当为左括号时加1，为右括号时减1
  let str = ''

  // 循环字符串，拆出原语
  for(let i=0; i<S.length; i++){
    str+=S[i]
    if(S[i] == "("){
      num++
    }else{
      num--
    }
    // 为0时说明匹配到了最外层的右侧括号
    if(num==0){
      stack.push(str)
      str=''
    }
  }

  // 去掉外层括号
  for(let i=0; i<stack.length; i++){
    let curStr = stack[i]
    res.push(curStr.slice(1,curStr.length-1))
  }

  return res.join('')

};

// 测试用例
let test = "(()())(())"

console.time('执行用时');
console.log(removeOuterParentheses(test));
console.timeEnd('执行用时');