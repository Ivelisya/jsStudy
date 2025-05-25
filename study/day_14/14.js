
// 使用DOM操作插入h2元素
// var h2_nihao = document.createElement("h2");
// h2_nihao.textContent = "你好";
// document.body.appendChild(h2_nihao);

// var h2_hello = document.createElement("h2");
// h2_hello.textContent = "hello";
// document.body.appendChild(h2_hello);

var li = document.createElement("li");
var txt = document.createTextNode("粉色");
li.appendChild(txt);
document.getElementById("red").parentElement.insertBefore(li, document.getElementById("red"));