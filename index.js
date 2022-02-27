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
    bar.style.width = eval(1004/len)+"px";
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
  return new Promise(function (resolve) {
    setTimeout(function () {
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
    bars[bars.length - i - 1].style.background = "blue";
  }
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
    await matteKudasai();
  }
}

async function selectionSort() {
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
}

async function MergeSorted(a, s, e) {
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
  await mergeSort(bars, 0, bars.length - 1);
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
    await matteKudasai();
  }
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
  await QuickSort(bars, 0, bars.length - 1);
  for (var i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
    await matteKudasai();
  }
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
  await buildHeapfromArray(bars);
  for (var i = bars.length - 1; i >= 0; i--) {
    bars[i].style.background = "green";
    await matteKudasai();
  }
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
  for(let i = 0; i < arr.length; i++) {
    arr[i].style.background = "cyan";
  }
}

async function RadixSort() {
  var bars = document.querySelectorAll(".bar");
  var max = -1;
  for (var i = 0; i < bars.length; ++i) {
    if (parseInt(bars[i].style.height) > max)
      max = parseInt(bars[i].style.height);
  }
  for (var exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    await countingSort(bars, exp);
  }
  for(var i = 0; i < bars.length; i++) {
    bars[i].style.background = "green";
    await matteKudasai();
  }
}

genBars(50);
