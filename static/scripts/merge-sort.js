track = false;

function merge(left, right) {
    let workingArray = [];

    leftCheck = left;
    rightCheck = right;

    while (left.length && right.length) {
        if(track == false) {
            if(left[0] < right[0]) {
                workingArray.push(left.shift());
                track = true;
            } 
        } else {
            workingArray.push(right.shift());
        }
    }
    //step tracking
    updateArray([ ...workingArray, ...left, ...right ], 0);
    return [ ...workingArray, ...left, ...right ];
}

function mergeSort(givenArray) {
    const half = givenArray.length / 2;

    if(givenArray.length < 2){
        return givenArray; 
    }

    const left = givenArray.splice(0, half);
    //step tracking
    updateArray(left, 1);
    return merge(mergeSort(left),mergeSort(givenArray));
}
