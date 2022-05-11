/**
 * * 题目名称：整理字符串
 * * 题目地址：https://leetcode-cn.com/problems/make-the-string-great
 */

// * 思路：初始化一个栈存储有效字符，循环字符串，每次拿出栈顶字符与当前字符比较，若符合aA模式则不做处理，不符合则推入栈

/**
 * @param {string} s
 * @return {string}
 */
 var makeGood = function(s) {
    let stack = []
    let i = 0
    while(s[i]){
        let prev = stack.pop()
        if(prev){
            if(Math.abs(prev.charCodeAt() - s[i].charCodeAt()) != 32){
                stack.push(prev, s[i])
            }
        }else{
            stack.push(s[i])
        }
        
        i++
    }
    return stack.join('')
};

// 测试用例
let test = "abBAcC"
let test1 = "leEeetcode"

console.time('执行用时');
// console.log(makeGood(test));
console.log(makeGood(test1));
console.timeEnd('执行用时');