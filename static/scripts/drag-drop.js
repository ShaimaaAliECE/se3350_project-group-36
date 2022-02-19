const item = document.querySelector('.item');
const boxes = document.querySelectorAll('.box');

item.addEventListener('dragstart', dragStart);

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

function dragEnter(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault();
}

function dragLeave(e) {
}

function drop(e) {
    e.preventDefault();

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    e.target.appendChild(draggable);

    draggable.classList.remove('hide');
}