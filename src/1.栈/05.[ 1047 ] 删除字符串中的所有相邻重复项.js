/**
 * * 题目名称：删除字符串中的所有相邻重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
 */

/* 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

 

示例：

输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 

提示：

1 <= S.length <= 20000
S 仅由小写英文字母组成。

 */
// * 思路：
/* 设一个栈存储最终字符串，循环字符串
    当栈中没有当前字符时，push
    当栈中有当前字符时，pop出最后一个字符
        若pop出的字符 与 当前字符 相同，则已经pop出了不用再管；
        若 不相同，两个字符都推入栈
 */

/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let stack = []
    for(let i=0; i<s.length; i++){

        if(!stack.includes(s[i])){
            stack.push(s[i])
        }else{
            let p = stack.pop()
            if(p != s[i]){
                stack.push(p)
                stack.push(s[i])
            }
        }
    }
    return stack.join('')
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(removeDuplicates('aacacabb')); // caca
console.timeEnd('执行用时');