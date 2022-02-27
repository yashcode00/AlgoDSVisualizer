function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function generateGraph(elem) {
    var g = document.getElementById("graph");
    for(var i = 0; i < elem; i++) {
        var n = document.createElement("div");
        n.id = 'node'+i;
        n.className = 'node';
        var nH = document.createElement("div");
        nH.id = 'node'+i+'header';
        var p = document.createElement('p');
        p.innerHTML = i;
        nH.appendChild(p);
        n.appendChild(nH);
        n.style.zIndex = i;
        g.appendChild(n);
    }
}

function makeDraggable(elem) {
    for(var i = 0; i < elem; i++) {
        dragElement(document.getElementById('node'+i));
    }
}

generateGraph(8);
makeDraggable(8);