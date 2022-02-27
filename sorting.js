function genBars(len) {
    //var l = document.querySelector("#arrayLength").value();

    arr = [];
    for (var i = 0; i < len; i++) {
        var n = Math.floor(Math.random() * 200) + 1;
        arr.push(n);
    }
    var bars = document.querySelector("#bars");
    var ba = document.querySelectorAll(".bar");
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${arr[i] * 2}px`;
        bar.classList.add("bar");
        bar.style.width = eval(1004 / len) + "px";
        bar.classList.add("flex-item");
        bars.appendChild(bar);
        // ba.style.width = eval(1004/len)+"px";
    }
}

function arrnew() {
    var l = document.getElementById("arr_sz").value;
    var bars = document.getElementById("barContainer");
    if(bars.firstElementChild) bars.removeChild(bars.firstElementChild);
    var bb = document.createElement("div");
    bb.setAttribute("id", "bars");
    bars.appendChild(bb);
    // console.log(document.getElementById("bars"))/
    genBars(l);
}

async function insertionSort() {
    _disableAllBtns();
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
    _enableAllBtns();
}

function matteKudasai() {
    var millisec;
    if (document.getElementById("speed").value == "slow") millisec = 100;
    if (document.getElementById("speed").value == "medium") millisec = 50;
    if (document.getElementById("speed").value == "high") millisec = 25;
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("");
        }, millisec);
    });
}

async function bubbleSort() {
    _disableAllBtns();
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
        bars[bars.length - i - 1].style.background = "blue";
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
    _enableAllBtns();
}

async function selectionSort() {
    _disableAllBtns();
    var bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i++) {
        var mi = parseInt(bars[i].style.height),
            ind = i;
        bars[i].style.background = "orange";
        for (var j = i + 1; j < bars.length; j++) {
            bars[j].style.background = "cyan";
        }
        for (var j = i + 1; j < bars.length; j++) {
            bars[j].style.background = "red";
            await matteKudasai();
            if (mi > parseInt(bars[j].style.height)) {
                mi = parseInt(bars[j].style.height);
                bars[ind].style.background = "cyan";
                bars[j].style.background = "orange";
                ind = j;
            } else {
                bars[j].style.background = "cyan";
            }
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
    _enableAllBtns();
}

async function MergeSorted(a, s, e) {
    _disableAllBtns();
    var mid = Math.floor((s + e) / 2);
    var i = s;
    var j = mid + 1;
    var ans = [];
    while (i <= mid && j <= e) {
        if (parseInt(a[i].style.height) < parseInt(a[j].style.height)) {
            a[i].style.background = "yellow";
            ans.push(a[i++].style.height);
        } else {
            a[j].style.background = "orange";
            ans.push(a[j++].style.height);
        }
        await matteKudasai();
    }
    while (i <= mid) {
        await matteKudasai();
        a[i].style.background = "yellow";
        ans.push(a[i++].style.height);
    }
    while (j <= e) {
        await matteKudasai();
        a[j].style.background = "orange";
        ans.push(a[j++].style.height);
    }

    // copying
    await matteKudasai();
    var index = s;
    for (var p = 0; p < ans.length; ++p) {
        //console.log(ans[p]);
        a[index].style.background = "blue";
        a[index++].style.height = ans[p];
        await matteKudasai();
    }
    _enableAllBtns();
}

async function mergeSort(a, s, e) {
    // base case
    if (s >= e) return;

    // recusive case
    var mid = Math.floor((s + e) / 2);
    await mergeSort(a, s, mid);
    await mergeSort(a, mid + 1, e);

    await MergeSorted(a, s, e);
}

async function MergeSort() {
    var bars = document.querySelectorAll(".bar");
    _disableAllBtns();
    await mergeSort(bars, 0, bars.length - 1);
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
    _enableAllBtns();
}

// A utility function to swap two elements
async function swap(arr, i, j) {
    //console.log(arr[i], ",", arr[j]);
    arr[i].style.background = "red";
    arr[j].style.background = "red";
    await matteKudasai();
    let temp = arr[i].style.height;
    arr[i].style.height = arr[j].style.height;
    arr[j].style.height = temp;
    arr[i].style.background = "cyan";
    arr[j].style.background = "cyan";
    await matteKudasai();
}

async function QuickSort(arr, s, e) {
    // base case
    if (s >= e) return;

    // rec case
    var index = Math.floor(Math.random() * (e - s + 1)) + s;
    var pivot = parseInt(arr[index].style.height);
    arr[index].style.background = "blue";
    await matteKudasai();
    swap(arr, index, e);
    var k = s - 1;
    for (var i = s; i < e; ++i) {
        await matteKudasai();
        if (parseInt(arr[i].style.height) < pivot) {
            swap(arr, i, ++k);
        }
    }
    swap(arr, ++k, e);
    await matteKudasai();
    arr[index].style.background = "cyan";
    //console.log(pivot,",",k,",",s,"-",e);
    //console.log(arr);
    await matteKudasai();
    await QuickSort(arr, s, k - 1);
    await QuickSort(arr, k + 1, e);
}

async function quicks() {
    var bars = document.querySelectorAll(".bar");
    _disableAllBtns();
    await QuickSort(bars, 0, bars.length - 1);
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
    _enableAllBtns();
}

// heap sort code
// A utility function to swap two elements
async function swap2(arr, i, j) {
    arr[i].style.background = "red";
    arr[j].style.background = "red";
    await matteKudasai();
    let temp = arr[i].style.height;
    arr[i].style.height = arr[j].style.height;
    arr[j].style.height = temp;
    arr[i].style.background = "cyan";
    arr[j].style.background = "cyan";
    await matteKudasai();
}

async function Heapify(arr, i, e) {
    var parent = i;
    var left = 2 * parent + 1;
    var right = 2 * parent + 2;
    while (left < e) {
        var max = left;
        if (
            right < e &&
            parseInt(arr[left].style.height) < parseInt(arr[right].style.height)
        ) {
            max = right;
        }
        if (parseInt(arr[max].style.height) >= parseInt(arr[parent].style.height)) {
            await swap2(arr, max, parent);
        } else break;
        parent = max;
        left = 2 * parent + 1;
        right = 2 * parent + 2;
    }
}

// building a heap array inplcae using bottom up approach in O(N)
async function buildHeapfromArray(arr) {
    // choosing first parent with both children prsent
    var p = Math.floor((arr.length - 1) / 2);
    // use simply heapify correcting each tree separtely
    for (; p >= 0; --p) await Heapify(arr, p, arr.length);
    await matteKudasai();
    // making sorted array inplace
    var end = arr.length - 1;
    //console.log(arr);
    while (end >= 0) {
        // pop elemnt largest from root and push it in last/swap
        await swap2(arr, 0, end);
        await matteKudasai();
        arr[end].style.background = "blue";
        await matteKudasai();
        // update end to be decremented
        end--;
        // place first elemnt in its correct position
        await Heapify(arr, 0, end + 1);
    }
    await matteKudasai();
}

async function HeapSort() {
    var bars = document.querySelectorAll(".bar");
    _disableAllBtns();
    await buildHeapfromArray(bars);
    for (var i = bars.length - 1; i >= 0; i--) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
    _enableAllBtns();
    _enableAllBtns();
}

// radix sort
async function countingSort(arr, exp) {
    /// making counting and output array
    var output = [];
    var count = [];
    for (var i = 0; i < 10; ++i) {
        count[i] = 0;
    }
    for (var i = 0; i < arr.length; ++i) {
        count[Math.floor(parseInt(arr[i].style.height) / exp) % 10]++;
    }
    for (var i = 1; i < 10; ++i) {
        count[i] += count[i - 1];
    }

    for (var i = arr.length - 1; i >= 0; --i) {
        output[count[Math.floor(parseInt(arr[i].style.height) / exp) % 10] - 1] =
            arr[i].style.height;
        count[Math.floor(parseInt(arr[i].style.height) / exp) % 10]--;
    }
    for (let i = 0; i < arr.length; ++i) {
        arr[i].style.height = output[i];
        arr[i].style.background = "red";
        await matteKudasai();
        arr[i].style.background = "blue";
    }
    await matteKudasai();
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.background = "cyan";
    }
}

async function RadixSort() {
    var bars = document.querySelectorAll(".bar");
    var max = -1;
    _disableAllBtns();
    for (var i = 0; i < bars.length; ++i) {
        if (parseInt(bars[i].style.height) > max)
            max = parseInt(bars[i].style.height);
    }
    for (var exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        await countingSort(bars, exp);
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
    _enableAllBtns();
}

function partition(arr, l, r, p) {
    var temp = arr[p].style.height;
    arr[p].style.height = arr[r].style.height;
    arr[r].style.height = temp;
    var track = l;
    for (var i = l; i < r; i++) {
        if (parseInt(arr[i].style.height) < parseInt(arr[r].style.height)) {
            var t = arr[i].style.height;
            arr[i].style.height = arr[track].style.height;
            arr[track].style.height = t;
            track++;
        }
    }
    temp = arr[track].style.height;
    arr[track].style.height = arr[r].style.height;
    arr[r].style.height = temp;
    return track;
}

function selectIdx(arr, l, r, k) {
    if (l == r) {
        return l;
    }
    var dest = l + k;
    while (true) {
        var pIndex = r - l + 1 <= 5 ? Math.floor(Math.random() * (r - l + 1)) + l : medianOfMedians(arr, l, r);
        pIndex = partition(arr, l, r, pIndex);
        if (pIndex == dest)
            return pIndex;
        else if (pIndex < dest) {
            l = pIndex + 1;
        } else {
            r = pIndex - 1;
        }
    }
}

function medianOfMedians(arr, l, r) {
    var numMedians = Math.ceil((r - l) / 5);
    for (var i = 0; i < numMedians; i++) {
        var subl = l + i * 5;
        var subr = subl + 4;
        if (subr > r) {
            subr = r;
        }
        var medianIdx = selectIdx(arr, subl, subr, Math.floor((subr - subl) / 2));
        var temp = arr[medianIdx].style.height;
        arr[medianIdx].style.height = arr[l + i].style.height;
        arr[l + i].style.height = temp;
    }
    return selectIdx(arr, l, l + numMedians - 1, Math.floor(numMedians / 2));
}

function selectK(arr, l, r, k) {
    var idx = selectIdx(arr, l, r, k);
    return arr[l + idx];
}

async function detSwap(arr, i, j) {
    //console.log(arr[i], ",", arr[j]);
    arr[i].style.background = "red";
    arr[j].style.background = "red";
    await matteKudasai();
    let temp = arr[i].style.height;
    arr[i].style.height = arr[j].style.height;
    arr[j].style.height = temp;
    arr[i].style.background = "cyan";
    arr[j].style.background = "cyan";
    await matteKudasai();
}

async function DetQuickSort(arr, s, e) {
    // base case
    if (s >= e) return;

    // rec case
    var pivot = parseInt(selectK(arr, s, e, s + (e - s) / 2).style.height);
    arr[index].style.background = "blue";
    await matteKudasai();
    swap(arr, index, e);
    var k = s - 1;
    for (var i = s; i < e; ++i) {
        await matteKudasai();
        if (parseInt(arr[i].style.height) < pivot) {
            swap(arr, i, ++k);
        }
    }
    swap(arr, ++k, e);
    await matteKudasai();
    arr[index].style.background = "cyan";
    //console.log(pivot,",",k,",",s,"-",e);
    //console.log(arr);
    await matteKudasai();
    await QuickSort(arr, s, k - 1);
    await QuickSort(arr, k + 1, e);
}

async function detQuicks() {
    var bars = document.querySelectorAll(".bar");
    _disableAllBtns();
    await QuickSort(bars, 0, bars.length - 1);
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.background = "green";
        await matteKudasai();
    }
    _enableAllBtns();
}

genBars(50);

var bars = document.querySelectorAll(".bar");

function _disableAllBtns() {
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
        btns[i].style.opacity = 0.5;
    }
}

function _enableAllBtns() {
    var btns = document.querySelectorAll("button");
    for(var i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
        btns[i].style.opacity = 1;

    }
}