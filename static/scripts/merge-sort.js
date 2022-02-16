function merge(left, right) {
    let workingArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            workingArray.push(left.shift()); 
        } else {
            workingArray.push(right.shift());
        }
    }
    document.write("<br>merge: working: ", workingArray, " + left: ", left, " + right: ", right);
    return [ ...workingArray, ...left, ...right ];
}

function mergeSort(givenArray) {
    const half = givenArray.length / 2;

    if(givenArray.length < 2){
        return givenArray; 
    }

    const left = givenArray.splice(0, half);
    document.write("<br>mergesort: ", left, " + ", givenArray);
    return merge(mergeSort(left),mergeSort(givenArray));
}