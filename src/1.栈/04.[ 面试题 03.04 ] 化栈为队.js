/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 */

/* 实现一个MyQueue类，该类用两个栈来实现一个队列。

示例：
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false

说明：

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */

/**  思路：初始化一个入栈，一个出栈
 *         push操作时，往入栈中push
 *         pop操作时，从出栈中取，
 *              如果出栈有则直接pop返回；
 *              如果出栈没有，则循环入栈，将值pop出并push进出栈
 *                  此时若出栈仍没有值，返回false；有则pop返回
 *          peek操作时，判断入栈和出栈，入栈取第一个元素，出栈取最后一个元素 
 *          empty操作，判断入栈或出栈是否为空
 */
/**
 * Initialize your data structure here.
 */
 var MyQueue = function() {
    this.stackA = []
    this.stackB = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackA.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stackB.length){ //栈B有值时直接pop
        return this.stackB.pop()
    }else{  //无值时去栈A取
        while(this.stackA.length){
            this.stackB.push(this.stackA.pop())
        }
        if(!this.stackB.length) return false
        return this.stackB.pop()
    }
    
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.stackB.length){
        return this.stackA[0]
    }else{
        return this.stackB[this.stackB.length-1]
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(!this.stackB.length){
        return this.stackA.length == 0
    }else{
        return this.stackB.length == 0
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// 测试用例
let test = ''

console.time('执行用时');
let queue = new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.pop())
console.log(queue.pop())
console.timeEnd('执行用时');