
function matteKudasai() {
    var millisec=400;
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("");
        }, millisec);
    });
}

async function pushh(){
    var list = document.getElementsByClassName("box");
    var val = document.getElementById("addval").value;
    var head = document.getElementById("headpic");
    var newnode  = document.createElement("div");
    head.style.display="block"; 
    newnode.innerHTML = val;
    newnode.classList.add("box");
    newnode.classList.add("flex-item");
    newnode.classList.add("node");
    var p1=document.createElement("img")
    p1.classList.add("node");
    p1.src = "arrow.png";
    if(list.length!=0){
        list[list.length-1].style.background = "green";
        await matteKudasai();
        list[list.length-1].style.background = "cyan";
        await matteKudasai();
    }
    if(list.length!=0)
        document.querySelector("#list").appendChild(p1);
    document.querySelector("#list").appendChild(newnode);
    var list = document.getElementsByClassName("box");
    if(list.length>0){
    var off = list[list.length-1]
    head.style.left = off.offsetLeft-25 + "px";
    head.style.top = off.offsetTop-180+"px";
    }
}

async function popp(){
    var list = document.getElementsByClassName("box");
    var head = document.getElementById("headpic");
    if(list.length==1){
        head.style.display = "none";
    }
    if(list.length>0){
        list[list.length-1].style.background = "red";
        await matteKudasai();
        list[list.length-1].style.background = "cyan";
        await matteKudasai();    
        var boxx = document.querySelector(".box:last-child");
        boxx.remove();
        var imgg = document.querySelector("img:last-child");
        imgg.remove();
        var off = list[list.length-1];
        head.style.left = off.offsetLeft-25 + "px";
        head.style.top = off.offsetTop-180+"px";

    }
    else{
        head.style.display = "none";
    }
}