var seq = [];
function _AddEdge() {
    var inp1 = parseInt(document.querySelector("#node1").value);
    var inp2 = parseInt(document.querySelector("#node2").value);
    seq.push([inp1, inp2]);
    render();
}

function _AddNode() {
    var inp0 = document.querySelector("#node0").value;
    seq.push(parseInt(inp0));
    render();
}

function render() {
    var g = new Dracula.Graph();
    for(var i = 0; i < seq.length; i++) {
        if(seq[i].length == 2) {
            g.addEdge(seq[i][0], seq[i][1]);
        } else {
            g.addNode(seq[i]);
        }
    }
    var canvas = document.querySelector('#canvas');
    if(canvas.firstElementChild) canvas.removeChild(canvas.firstElementChild);
    var layouter = new Dracula.Layout.Spring(g);
    layouter.layout();
    var renderer = new Dracula.Renderer.Raphael(document.getElementById('canvas'), g, 700, 600);
    renderer.draw();
}