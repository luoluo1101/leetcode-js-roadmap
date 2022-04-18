/**
 * * 题目名称：用两个栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof
 */

/* 
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
    示例 1：

    输入：
    ["CQueue","appendTail","deleteHead","deleteHead"]
    [[],[3],[],[]]
    输出：[null,null,3,-1]
    示例 2：

    输入：
    ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
    [[],[],[5],[2],[],[]]
    输出：[null,-1,null,null,5,2]
    提示：

    1 <= values <= 10000
    最多会对 appendTail、deleteHead 进行 10000 次调用
    */
    /* 输入：

    ["CQueue","appendTail","deleteHead","deleteHead"] 
    这一行表示每一行代码的操作

    [[],[3],[],[]]
    这个表示每一行代码操作所需要的参数

    举例：
    CQueue 表示新建一个CQueue对象，对应的所需参数为[]，即此操作不需要参数。
    appendTail 表示执行一个appendTail()操作，对应要被操作的元素为3。
    deleteHead 表示执行一个deleteHead操作，对应的所需参数为[]，即此操作不需要参数。
    deleteHead 表示执行一个deleteHead操作，对应的所需参数为[]，即此操作不需要参数。

    以上的输入其实是一个代码执行的步骤描述与其对应所需参数。

    即两个纬度：
    1、操作描述
    2、此次操作所需参数
    3、操作描述与操作所需参数是通过默认顺序一一对应的。

    */
// * 思路：建一个入队栈、一个出队栈
// 执行appendTail时，向A栈中push
// 执行deleteHead时，先判断B栈中是否有值，有直接pop，无去A中看是否有
//      A中有，循环将A的pop出来push进B中
//      再判断B有无，无返回-1，有则pop

// 往A栈一个个push，再将A栈中的一个个pop出push进B栈，B栈在pop时，两个栈就会有一种队列的感觉

var CQueue = function() {
    this.stackA = [] //入队栈
    this.stackB = [] //出队栈
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(this.stackB.length){
        return this.stackB.pop()
    }else{
        while(this.stackA.length){
            this.stackB.push(this.stackA.pop())
        }
        if(!this.stackB.length){
            return -1
        }else{
            return this.stackB.pop()
        }
    }
};

// 测试用例
let test = ''

console.time('执行用时');
let cq = new CQueue()
console.log(cq);
console.timeEnd('执行用时');