toggle = true;

function merge(left, right) {
    let workingArray = [];

    while (left.length && right.length) {
        if(left[0] > right[0] && toggle == false) {
            workingArray.push(right.shift());
            toggle = true;
        } else {
            workingArray.push(left.shift());
        }
    }
    return [ ...workingArray, ...left, ...right ];
}

function mergeSort(givenArray) {
    const half = givenArray.length / 2;

    if(givenArray.length < 2){
        return givenArray; 
    }

    const left = givenArray.splice(0, half);
    return merge(mergeSort(left),mergeSort(givenArray));
}

function getToggle() {
    return toggle;
}

function setToggle(newToggle) {
    toggle = newToggle;
    return toggle;
}

