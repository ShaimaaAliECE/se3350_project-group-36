function merge(left, right) {
    let workingArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            workingArray.push(left.shift()); 
        } else {
            workingArray.push(right.shift());
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