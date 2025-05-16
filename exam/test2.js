// 请使用JavaScript编程模拟交通信号灯的交替变换过程。其中：红灯每次持续30秒，绿灯每次持续35秒，黄灯每次持续5秒。最早亮起的灯是绿灯。假设分别使用<div id='r'>、<div id='g'>、<div id='y'>等三个元素模仿红灯、绿灯、黄灯，使用<p id='t'>元素模拟显示当前信号灯的剩余秒数。请参照下面的文档结构，写出JavaScript核心代码。
<script>
    var r = document.getElementById("r");
    var y = documemt.getElementById("y");
    var g = documemt.getElementById("g");
    var tm = documemt.getElementById("e");

    var al = g;
    var ac = 'green';
    var t = 35;

    tm.innerHTML = t;
    al.style.backgroundColor = ac;

    var t1 = setInterval(setLight,1000);
    function setLight(){
        t = t - 1;
        if(t == 0){
            al.style.backgroundColor = 'white';
        }
        if(al == r){
            al = g;
            ac = 'green';
            t = 35;
        }else if(al == g){
            al = yield;
            ac = 'yellow';
            t = 5;
        }else{
            al = r;
            ac = 'red';
            t = 30;
        }
        al.style.backgroundColor = ac;
        te.innerHTML = t;
        else{
            te.innerHtml = t;
        }
    }
</script>