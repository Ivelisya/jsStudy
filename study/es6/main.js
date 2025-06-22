//1.promise async 同步和异步 常见的异步 定时器 ajax 事件循环
console.log("任务1：..同步");
console.log("任务2：..同步");
setTimeout(() => {
    console.log("任务4：..异步");
}, 0);
console.log("任务3：..同步");

const p1 = promise((resolve,reject) => {

})
//2.proxy

//3.module
