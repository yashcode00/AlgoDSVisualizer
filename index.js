function genBars(len) {
    //var l = document.querySelector("#arrayLength").value();

    arr = [];
    for (var i = 0; i < len; i++) {
        var n = Math.floor(Math.random() * 200) + 1;
        arr.push(n);
    }
    var bars = document.querySelector("#bars");
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${arr[i] * 2}px`;
        bar.classList.add("bar");
        bar.classList.add("flex-item");
        bars.appendChild(bar);
    }
}

function arrnew() {
    var l = document.getElementById("arr_sz").value;
    var bars = document.getElementById("bars");
    bars.remove();
    var bb = document.createElement("div");
    bb.setAttribute("id", "bars");
    document.querySelector("body").appendChild(bb);
    // console.log(document.getElementById("bars"))/
    genBars(l);
}

async function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    var len = bars.length;
    for (let i = 0; i < len; i += 1) {
        let j = i;
        while (
            j > 0 &&
            parseInt(bars[j].style.height) < parseInt(bars[j - 1].style.height)
        ) {
            var temp = bars[j].style.height;
            bars[j].style.height = bars[j - 1].style.height;
            bars[j - 1].style.height = temp;
            bars[j].style.background = "red";
            bars[j - 1].style.background = "red";
            await matteKudasai();
            bars[j].style.background = "cyan";
            bars[j - 1].style.background = "cyan";
            j--;
        }
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
}

function matteKudasai() {
    var millisec;
    if (document.getElementById("speed").value == "slow") millisec = 100;
    if (document.getElementById("speed").value == "medium") millisec = 50;
    if (document.getElementById("speed").value == "high") millisec = 25;
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("");
        }, millisec);
    });
}

async function bubbleSort() {
    var bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i++) {
        for (var j = 0; j < bars.length - i - 1; j++) {
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                var temp = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;
            }
            await matteKudasai();
            bars[j].style.background = "cyan";
            bars[j + 1].style.background = "cyan";
        }
        for (var j = bars.length - i - 1; j < bars.length; j++) {
            bars[j].style.background = "blue";
        }
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
}

async function selectionSort() {
    var bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i++) {
        var mi = 40000,
            ind = i;
        bars[i].style.background = "red";
        for (var j = i; j < bars.length; j++) {
            bars[j].style.background = "red";
            if (mi > parseInt(bars[j].style.height)) {
                mi = parseInt(bars[j].style.height);
                ind = j;
                await matteKudasai();
            }
            bars[j].style.background = "cyan";
        }
        var temp = bars[ind].style.height;
        bars[ind].style.height = bars[i].style.height;
        bars[i].style.height = temp;
        bars[i].style.background = "blue";
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
}

async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await matteKudasai();
        ele[low + i].style.background = 'red';
        left[i] = ele[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await matteKudasai();
        ele[mid + 1 + i].style.background = 'red';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await matteKudasai();
    let i = 0,
        j = 0,
        k = low;
    while (i < n1 && j < n2) {
        await matteKudasai();
        if (parseInt(left[i]) < parseInt(right[j])) {
            ele[k].style.background = "blue";
            ele[k].style.height = left[i];
            i++;
            k++;
        } else {
            ele[k].style.background = "blue";
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await matteKudasai();
        ele[k].style.background = "blue";
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {
        await matteKudasai();
        ele[k].style.background = "blue";
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r) {
    if (l >= r) {
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

async function MergeSort() {
    let bars = document.querySelectorAll(".bar");
    let s = 0;
    let e = parseInt(bars.length) - 1;
    await mergeSort(bars, s, e);
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
}

genBars(50);