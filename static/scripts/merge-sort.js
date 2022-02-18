function merge(left, right) {
    i=0;
    tracker1 = new Array(20);
    let workingArray = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            workingArray.push(left.shift()); 
        } else {
            workingArray.push(right.shift());
        }
    }
    //step tracking
    i++;
    tracker1[i] = [ ...workingArray, ...left, ...right ];
    document.write("<br>sugma: ", tracker1[i]);

    document.write("<br>merge: working: ", workingArray, " + left: ", left, " + right: ", right);
    return [ ...workingArray, ...left, ...right ];
}

function mergeSort(givenArray) {
    i = 0;
    tracker2 = new Array(20);
    const half = givenArray.length / 2;

    if(givenArray.length < 2){
        return givenArray; 
    }

    const left = givenArray.splice(0, half);
    //step tracking
    i++;
    tracker2[i] = left;
    document.write("<br>ligma: ", tracker2[i]);
    
    document.write("<br>mergesort: ", left, " + ", givenArray);
    return merge(mergeSort(left),mergeSort(givenArray));
}
