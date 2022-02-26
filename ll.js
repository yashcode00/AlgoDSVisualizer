function matteKudasai() {
    var millisec=400;
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("");
        }, millisec);
    });
}

async function addd(){
    const list = document.getElementsByClassName("box");
    var val = document.getElementById("addval").value;
    var newnode  = document.createElement("div")
    newnode.innerHTML = val
    newnode.classList.add("box");
    newnode.classList.add("flex-item");
    newnode.classList.add("node");
    var p1=document.createElement("img")
    p1.classList.add("node");
    p1.src = "arrow.png";
    if(list.length!=0){
        list[list.length-1].style.background = "green";
        await matteKudasai();
        list[list.length-1].style.background = "black";
        await matteKudasai();
    }
    if(list.length!=0)
        document.querySelector("#list").appendChild(p1);
    document.querySelector("#list").appendChild(newnode);
    docu
}

async function popp(){
    const list = document.getElementsByClassName("box");
        list[list.length-1].style.background = "green";
        await matteKudasai();
        list[list.length-1].style.background = "black";
        await matteKudasai();    
    var boxx = document.querySelector(".box:last-child");
    boxx.remove();
    var imgg = document.querySelector("img:last-child");
    imgg.remove();
}