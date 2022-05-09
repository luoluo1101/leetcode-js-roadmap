/**
 * * 题目名称：最小栈
 * * 题目地址：https://leetcode-cn.com/problems/min-stack
 */


/* 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。
 

示例 1:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2. */


// * 思路：初始化两个栈，一个是xStack用于对元素x进行入栈、出栈操作；一个是辅助栈minStack，用于存储xStack中已存元素中的最小元素。
// 这里辅助栈的入栈操作是和元素x放入栈xStack同步的，也就说xStack中每入栈一个元素，minStack中相应的要存入当前最小元素。
// 保持两个栈同步操作，出栈时也同步出栈。

var MinStack = function() {
    this.xStack = []
    this.minStack = [Infinity] //用来存最小元素
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.xStack.push(val)
    this.minStack.push(Math.min(val,this.minStack[this.minStack.length-1]))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.xStack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.xStack[this.xStack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

// 测试用例
console.time('执行用时');
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();
minStack.getMin();
console.timeEnd('执行用时');