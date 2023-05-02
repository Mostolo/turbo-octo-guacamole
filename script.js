function drag(luigi) {
    let mario = document.getElementById(luigi)
    var pos1 = 0, pos2 = 0, pos3 = 4, pos4 = 0;
    if (document.getElementById(mario.id + "head")) {
        document.getElementById(mario.id + "head").onmousedown = dragMouseDown;
    } else {
        mario.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        document.getElementById(mario.id + "head").style.cursor = "grabbing";
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

        let gay = document.getElementById("gay");
        gay.innerHTML = pos3 + pos4;
    }
    
    function closeDragElement() {
        document.getElementById(mario.id + "head").style.cursor = "grab";
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        mario.style.top = (mario.offsetTop - pos2) + "px";
        mario.style.left = (mario.offsetLeft - pos1) + "px";
    }
} //Il santo graal di questo sito <3

function spamup(spam) {
    let x = document.getElementById(spam)
    x.style.display = "block"
}
function spamdown(spam) {
    let x = document.getElementById(spam);
    x.style.display = "none";
}