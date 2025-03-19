let v1 = 5;
let v2 = 8;
console.log("v1:" + v1);

let v = v1;//声明临时变量v，并接受v1的数据
v1 = v2;//将v2的数据赋值给v1 将v1变量的内存接受v2的数据
v2 = v;
console.log("v1:" + v1 + "v2:" + v2);