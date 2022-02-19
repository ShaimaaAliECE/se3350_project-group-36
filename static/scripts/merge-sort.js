function merge(left, right, track) {
    let workingArray = [];

    while (left.length && right.length) {
        if(left[0] > right[0] && track == false) {
            workingArray.push(right.shift());
            track = true;
        } else {
            workingArray.push(left.shift());
        }
    }
    return [ ...workingArray, ...left, ...right ];
}

function mergeSort(givenArray, track) {
    const half = givenArray.length / 2;

    if(givenArray.length < 2){
        return givenArray; 
    }

    const left = givenArray.splice(0, half);
    return merge(mergeSort(left, track), mergeSort(givenArray, track), track);
}