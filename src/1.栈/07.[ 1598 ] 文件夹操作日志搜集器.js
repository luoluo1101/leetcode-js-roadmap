/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
 */

/* 文件系统启动时位于主文件夹，然后执行 logs 中的操作。

执行完所有变更文件夹操作后，请你找出 返回主文件夹所需的最小步数 。

 

示例 1：

输入：logs = ["d1/","d2/","../","d21/","./"]
输出：2
解释：执行 "../" 操作变更文件夹 2 次，即可回到主文件夹
示例 2：

输入：logs = ["d1/","d2/","./","d3/","../","d31/"]
输出：3
示例 3：

输入：logs = ["d1/","../","../","../"]
输出：0

提示：

1 <= logs.length <= 103
2 <= logs[i].length <= 10
logs[i] 包含小写英文字母，数字，'.' 和 '/'
logs[i] 符合语句中描述的格式
文件夹名称由小写英文字母和数字组成
。 */

// * 思路：初始化一个栈，循环操作，遇到./或../时不push，遇到../时pop，其他就push到栈中，最后返回栈的长度



/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let stack = []
    for(let i=0; i<logs.length; i++){
        let cur = logs[i]

        if(cur == "../" && stack.length){
            stack.pop()
        }else if(cur != "./" && cur != "../"){
            stack.push(cur)
        }
    }
    return stack.length
};
// 测试用例
let test =  ["d1/","d2/","../","d21/","./"]

console.time('执行用时');
console.log(minOperations(test));
console.timeEnd('执行用时');