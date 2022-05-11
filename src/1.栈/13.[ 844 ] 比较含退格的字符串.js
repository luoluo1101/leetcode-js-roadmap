/**
 * * 题目名称：比较含退格的字符串
 * * 题目地址：https://leetcode-cn.com/problems/backspace-string-compare
 */
/* 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：s = "ab#c", t = "ad#c"
输出：true
解释：s 和 t 都会变成 "ac"。
示例 2：

输入：s = "ab##", t = "c#d#"
输出：true
解释：s 和 t 都会变成 ""。
示例 3：

输入：s = "a#c", t = "b"
输出：false
解释：s 会变成 "c"，但 t 仍然是 "b"。
 

提示：

1 <= s.length, t.length <= 200
s 和 t 只含有小写字母以及字符 '#'
 */


// * 正常思路应该是从头遍历拼接遇到#往前删除一位，换个思路
    // 增加个中间变量b，用来记录当前还存在的#数量，然后从后遍历
    // 遇到#， b++
    // 遇到不是#的，同时#有存量， b--
    // 遇到不是#的，同时没有存量了，正常拼接

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    function toStr(str){
        let finalStr = '' // 回退后的字符串
        let b = 0 // 记录#并回退
        for(let i=str.length-1; i>=0; i--){
            if(str[i]=='#'){
                b++
            }else if(b > 0){
                b--
            }else{
                finalStr += str[i]
            }
        }
        return finalStr
    }
    return toStr(s) == toStr(t)
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(backspaceCompare('ab#c', 'ad#c')); // true
console.timeEnd('执行用时');