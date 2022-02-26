function genBars() {
    //var l = document.querySelector("#arrayLength").value();

    arr = []
    for (var i = 0; i < 50; i++) {
        var n = Math.floor(Math.random() * 100) + 1;
        arr.push(n);
    }
    var bars = document.querySelector("#bars");
    for (let i = 0; i < arr.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${arr[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bars.appendChild(bar);
    }
}

function insertionSort() {
    let bars = document.querySelectorAll(".bar");
    var len = bars.length;
    for (let i = 1; i < len; i += 1) {
        let j = i;
        while (j > 0 && parseInt(bars[j].style.height) < parseInt(bars[j - 1].style.height)) {
            var temp = bars[j].style.height;
            bars[j].style.height = bars[j - 1].style.height;
            bars[j - 1].style.height = temp;
            j--;
        }
    }
}

function swap(a, b) {
    return [b, a];
}

console.log(swap(1, 2));

function bubbleSort() {
    var bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i++) {
        for (var j = 0; j < bars.length - i - 1; j++) {
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                console.log(bars[j], bars[j + 1]);
                var temp = bars[j].style.height;
                bars[j].style.height = bars[j + 1].style.height;
                bars[j + 1].style.height = temp;
                console.log(bars[j], bars[j + 1]);
            }
        }
    }
    for (var i = 0; i < bars.length; i++) {
        console.log(bars[i].style.height);
    }
}


// function mergeSort()
// {

// }

genBars();
insertionSort();
//insertionSort();