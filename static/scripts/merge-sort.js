tracker0 = new Array(25);
tracker1 = new Array (25);

function merge(left, right) {
    let workingArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            workingArray.push(left.shift()); 
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

function updateArray(arrayUpdate, arrayType) {
    if(arrayType == 0) {
        tracker0.push(arrayUpdate);
    } else {
        tracker1.push(arrayUpdate);
    }
}

function displayArray(arrayType) {
    if(arrayType == 0) {
        return tracker0;
    } else {
        return tracker1;
    }
}
