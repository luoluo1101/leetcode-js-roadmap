/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci
 */

// * 思路：pop()：正常弹出顶部元素
        // top()：正常获取顶部元素
        // push()：每次push的是一个对象，对象上有两个属性：val和min。val就是当前元素的值，min是当前栈中的最小值。每次push()，相应的min都重新计算，保证栈顶元素的min属性，一直都是最小值。
        // 若栈空，min就是val
        // 若栈不空，min是栈顶元素的min属性和当前val的较小者
        // getMin()：返回栈顶元素的min属性即可，为常数时间。


/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // push的是对象，val为push的值，min是此时刻栈中最小的值
    this.stack.push({
        val: x,
        min: this.stack.length ? Math.min(x, this.getMin()) : x
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length-1].min
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