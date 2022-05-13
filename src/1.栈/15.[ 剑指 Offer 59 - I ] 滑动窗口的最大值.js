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
        let maxNum = -Infinity // 取最大值，初始化比较的值不能是0，应是-Infinity
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
let nums1 = [1, -1], k1 = 1

console.time('执行用时');
// console.log(maxSlidingWindow(nums, k)); // [ 3, 3, 5, 5, 6, 7 ]
// console.log(maxSlidingWindow(nums1, k1));
console.timeEnd('执行用时');



// *思路：创建窗口队列（值为数组的index），循环数组，保证窗口队列单调递减，当窗口移动时去掉首元素（保证窗口队列长度为k）
//        取最大值时，取窗口首元素index对应的nums数值
//        若当前元素为i，队首元素应变更为 i-k+1
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow1 = function(nums, k) {
    const window = [];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        // 删除队列中小于当前元素的值，保证队列单调递减，队首是最大元素。
        while (window.length && nums[i] > nums[window[window.length - 1]]) {
            window.pop();
        }
        // 加入新元素
        window.push(i);
        // 不在窗口中时，将队首移出
        if (window[0] < i - k + 1) {
            window.shift();
        }
        // 此时窗口已形成，可以开始移动
        if (i >= k - 1) {
            // 将当前窗口中的最大元素计入结果
            result.push(nums[window[0]]);
        }
    }
    return result;
};

console.log(maxSlidingWindow1(nums, k)); // [ 3, 3, 5, 5, 6, 7 ]
