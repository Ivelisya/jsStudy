//变量和常量
var a = 1;
let b = 2;
b++;
{
    const c = 3;
    console.log(c);
    // c = 4; // 会报错，因为c是常量
}
//const 常量 意思是不能被修改的量
// 不能给常量分配一个可以变的值

// console.log(c);
//模板字符串
const str1 = 'abc';
//通过标记进行内容引用
const str2 = 'efg${str1}这也是';
console.log(str2);

//3.解构赋值
const arr = [1,2,3];
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3

const result = arr 