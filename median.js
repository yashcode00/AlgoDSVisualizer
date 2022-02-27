function partition(arr, l, r, p) {
    var temp = arr[p];
    arr[p] = arr[r];
    arr[r] = temp;
    var track = l;
    for (var i = l; i < r; i++) {
        if (arr[i] < arr[r]) {
            var t = arr[i];
            arr[i] = arr[track];
            arr[track] = t;
            track++;
        }
    }
    temp = arr[track];
    arr[track] = arr[r];
    arr[r] = temp;
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
        var temp = arr[medianIdx];
        arr[medianIdx] = arr[l + i];
        arr[l + i] = temp;
    }
    return selectIdx(arr, l, l + numMedians - 1, Math.floor(numMedians / 2));

}

function selectK(arr, l, r, k) {
    if (!Array.isArray(arr) || r - l + 1 == 0 || r - l < k) {
        return -1;
    }
    var idx = selectIdx(arr, l, r, k);
    return arr[l + idx];

}

var bars = document.querySelectorAll('.bar');
var barss = [];
for (var i = 0; i < bars.length; i++) {
    barss.push(parseInt(bars[i].style.height));
}
console.log(selectK(barss, 0, barss.length - 1, 25));