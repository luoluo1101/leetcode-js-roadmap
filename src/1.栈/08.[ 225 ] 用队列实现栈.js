/**
 * * 题目名称：用队列实现栈
 * * 题目地址：https://leetcode-cn.com/problems/implement-stack-using-queues
 */
/* 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

实现 MyStack 类：

void push(int x) 将元素 x 压入栈顶。
int pop() 移除并返回栈顶元素。
int top() 返回栈顶元素。
boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
 

注意：

你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 

示例：

输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
 

提示：

1 <= x <= 9
最多调用100 次 push、pop、top 和 empty
每次调用 pop 和 top 都保证栈不为空
 */
// * 思路：初始化两个队列，其中队列2作为备用队列
// *        push时往队列1push；pop时若队1为空，交换队1和队2，此时若队1有值，队1的循环push进队2但留下队尾
// *        堆顶则使用自定义的pop方法拿出队尾，需再push进队1
// *        是否为空，需同时判断队1和队2

var MyStack = function() {
    this.queue1 = []
    this.queue2 = [] //备用队列
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.queue1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(!this.queue1.length){ // 队列1为空时，交换队列1和队列2
        [this.queue1, this.queue2] = [this.queue2, this.queue1] // * 交换的方法
    }
    while(this.queue1.length > 1){
        this.queue2.push(this.queue1.shift())
    }
    return this.queue1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    const x = this.pop();//使用队列的pop方法查看栈顶，队列出队，然后在push进队列1
    this.queue1.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length
};

// 测试用例
let test = ''

console.time('执行用时');
let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // 返回 2
console.log(myStack.pop()); // 返回 2
console.log(myStack.empty()); // 返回 False
console.timeEnd('执行用时');