const items = document.querySelectorAll('.item');
const splits = document.querySelectorAll('.split');
const boxes = document.querySelectorAll('.box');
const splitareas = document.querySelectorAll('.box2');


items.forEach(item => {  
    addEventListener('dragstart', dragStart);
});

splits.forEach(split => {  
    addEventListener('dragstart', dragStart);
});

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

splitareas.forEach(box2 => {
    box2.addEventListener('dragenter', dragEnter)
    box2.addEventListener('dragover', dragOver);
    box2.addEventListener('dragleave', dragLeave);
    box2.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    //e.effectAllower = "copyMove"
}

function dragEnter(e) {
    e.preventDefault();
    //e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    //e.target.classList.add('drag-over');
}

function dragLeave(e) {
    //e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    //e.target.classList.remove('drag-over');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // FIX SO WE CAN  DRAGGING INTO THE FUCKING UNKNOWN
    for(i = 1; i < 10; i++) {
        if(id == "split" && e.target.id == "splitArea" + i) { 
            const copy = document.getElementById(id).cloneNode(true);
            copy.id = "newSplit";
            e.target.appendChild(copy);
            //  ?? break;
        } 
    } 

    for(i = 0; i < 10; i++) {
        if(e.target.id == "box" + i) {
            e.target.appendChild(draggable);
        }
    }

    //draggable.classList.remove('hide');
}