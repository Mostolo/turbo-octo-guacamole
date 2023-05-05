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
        ontop(luigi)
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

    function ontop(wario) {
        let y = Array.from(
            document.getElementsByClassName("spam")
        );
    
        for (const spam of y) {
            spam.style.zIndex --
        }
    
        let x = document.getElementById(wario)
        x.style.zIndex = 0;
    }
} //Il santo graal di questo sito <3

function spamup(spam) {
    let x = document.getElementById(spam)
    x.style.display = "block"
}

function spamallup() {
    let x = Array.from(
        document.getElementsByClassName("spam")
    )

    for (const spam of x) {
        spam.style.display = "block"
    }
}

function spamalldown() {
    let x = Array.from(
        document.getElementsByClassName("spam")
    )

    for (const spam of x) {
        spam.style.display = "none"
    }
}

function spamdown(e) {
    let x = e.target.parentElement
    x.style.display = "none"
}

function ranPos(e) {
    let spammer = Array.from(
        document.getElementsByClassName("spam")
    );

    for (const spam of spammer) {
        let pageW = window.outerWidth
        let rngX = rng(pageW)
        let pageH = window.outerHeight
        let rngY = rng(pageH)    
        let w = spam.offsetWidth
        let h = spam.offsetHeight
        if (rngX + w >= pageW) {
            let ranPX = rngX - w
            spam.style.left = ranPX + "px"
        } else {
            let ranPX = rngX
            spam.style.left = ranPX + "px"
        }
        if (rngY + h >= pageH) {
            let ranPY = rngY - h
            spam.style.top = ranPY + "px"
        } else {
            let ranPY = rngY
            spam.style.top = ranPY + "px"
        }
    }
}

function rng(luigi) {
    let x = Math.floor(Math.random() * luigi)
    document.getElementById("spamhead").innerHTML = x
    return(x)
}