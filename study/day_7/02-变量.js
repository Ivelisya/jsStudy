var str = "hello world";
console.log(str);
// 2.先声明再赋值
var str2;
str2 = "hello world";
console.log(str2);
// var str3;
// console.log(str3); // undefined
var aa = 1, bb = 2, cc = 3;
var str2;
// console.log(bb, cc); // 1 2 3
console.log(
    str2
);

var str = "你好";
console.log(str); // 你好
var flag = true;
console.log(flag); // true
// 3. 变量提升
console.log(uname);//undefined
var uname = "zhangsan"; 
//没有变量提升
upwd = "123456";
console.log(upwd); // 123456