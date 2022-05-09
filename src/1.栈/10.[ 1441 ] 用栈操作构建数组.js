/**
 * * 题目名称：用栈操作构建数组
 * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
 */


/* 给你一个目标数组 target 和一个整数 n。每次迭代，需要从  list = {1,2,3..., n} 中依序读取一个数字。

请使用下述操作来构建目标数组 target ：

Push：从 list 中读取一个新元素， 并将其推入数组中。
Pop：删除数组中的最后一个元素。
如果目标数组构建完成，就停止读取更多元素。
题目数据保证目标数组严格递增，并且只包含 1 到 n 之间的数字。

请返回构建目标数组所用的操作序列。

题目数据保证答案是唯一的。

 

示例 1：

输入：target = [1,3], n = 3
输出：["Push","Push","Pop","Push"]
解释： 
读取 1 并自动推入数组 -> [1]
读取 2 并自动推入数组，然后删除它 -> [1]
读取 3 并自动推入数组 -> [1,3]
示例 2：

输入：target = [1,2,3], n = 3
输出：["Push","Push","Push"]
示例 3：

输入：target = [1,2], n = 4
输出：["Push","Push"]
解释：只需要读取前 2 个数字就可以停止。
 */


// * 思路：遍历从1到n的数, 
    // 如果target中包含这个数,res中添加'push',
    // 不包含这个数,添加 'push','pop'
    // 用 len 来累计添加的数,当和target长度相等时返回



/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let res = [], count = 0;
    for (let i = 1; i <= n; i++) {
      if (target.includes(i)) {
        res.push('Push')
        count++
      } else {
        res.push('Push', 'Pop')
      }
      if (count === target.length) return res
    }
};

// 测试用例
let target = [1,3], n = 3

console.time('执行用时');
console.log(buildArray(target, n));
console.timeEnd('执行用时');