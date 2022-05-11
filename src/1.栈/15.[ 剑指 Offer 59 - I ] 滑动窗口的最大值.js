/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
 */
/* 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。
 */


// * 思路：定义一个找最大值的函数，循环切出数组找最大值

var maxSlidingWindow = function(nums, k) {
    // 获取数组里最大的值
    function getMax(arr=[]){
        let maxNum = 0
        for(let i=0; i<arr.length; i++){
            maxNum = Math.max(maxNum, arr[i])
        }
        return maxNum
    }
    // 循环数组，截取k个大小的数组 
    let res = []
    let arr = [...nums]
    for(let i=0; i<nums.length; i++){
        // slice方法不会影响原数组，(start, end)，第二个参数不是个数
        // if(nums.slice(i,k).length == k){
        //     res.push(getMax(nums.slice(i,k)))
        // }
        if(nums.slice(i,i+k).length == k){
            res.push(getMax(nums.slice(i,i+k)))
        }
    }
    return res
};

// 测试用例
let nums = [1,3,-1,-3,5,3,6,7], k = 3

console.time('执行用时');
console.log(maxSlidingWindow(nums, k));
console.timeEnd('执行用时');