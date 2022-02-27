function eventWindowLoaded() {
    canvasApp()
}

function canvasSupport(n) {
    return !!n.getContext
}

function canvasApp() {
    var n = document.getElementById("jc");
    if (canvasSupport(jc)) {
        var e = n.getContext("2d"),
            t = n.width = window.innerWidth,
            a = n.height = window.innerHeight,
            i = Array(275).join(0).split("");
        "undefined" != typeof Game_Interval && clearInterval(Game_interval), Game_Interval = setInterval(o, 45)
    }

    function o() {
        e.fillStyle = "rgba(0,0,0,.07)", 
      e.fillRect(0, 0, t, a), 
      e.fillStyle = "#ed5b23", 
      e.font = "10px Georgia", 
      i.map(function(n, t) {
            text = String.fromCharCode(100 + 33 * Math.random()),
          x = 10 * t, 
          e.fillText(text, x, n),
          n > 100 + 3e4 * Math.random() ? i[t] = 0 : i[t] = n + 10
        })
    }
}
window.addEventListener("load", eventWindowLoaded, !1);