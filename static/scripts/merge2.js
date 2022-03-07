function merge2(left, right) {
    let sortedArr = []; // the sorted elements will go here
  
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
        //document.write("<br>mergedleft: " + sortedArr);
      } else {
        sortedArr.push(right.shift());
        //document.write("<br>mergedright: " + sortedArr);
      }
    }
  
    // use spread operator and create a new array, combining the three arrays
    document.write("<br>mergedfinal: " + [...sortedArr, ...left, ...right]);
    return [...sortedArr, ...left, ...right];
  }

  
  function mergeSort2(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    document.write("<br>left: " + left);
    document.write("<br>right: " + right);
    return merge2(mergeSort2(left), mergeSort2(right));
  }