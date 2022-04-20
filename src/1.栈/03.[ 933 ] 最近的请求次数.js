/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
 */
/* 写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

 

示例 1：

输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
 

提示：

1 <= t <= 109
保证每次对 ping 调用所使用的 t 值都 严格递增
至多调用 ping 方法 104 次

*/


// * 思路：初始化数组，ping时就往里push，初始化num为0，循环数组，符合[t-3000,t]则加1，返回num
var RecentCounter = function() {
    this.stack = []
};
/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.stack.push(t)
    let t1 = t - 3000
    let num = 0
    for(let i=0; i<this.stack.length; i++){
        if(this.stack[i]<=t && this.stack[i]>=t1){
            num++
        }
    }
    return num
};


// * 思路：每次ping时，先push，while判断头部元素是否符合，不符合则删掉，返回queue的长度
var RecentCounter1 = function() {
    this.queue = []
};
RecentCounter1.prototype.ping = function(t) {
        this.queue.push(t)
        while(this.queue[0]<t-3000){
            this.queue.shift()
        }
        return this.queue.length
}



// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');