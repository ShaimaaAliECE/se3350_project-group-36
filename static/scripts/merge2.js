var position = 9;
var side = 0;

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
    document.write("<br>merge into: " + [...sortedArr, ...left, ...right]);
    if(side == 3) {
        position += 4;
    } else {
        position += 2;
    }
    side += 1;
    return [...sortedArr, ...left, ...right];
  }

  
  function mergeSort2(arr) {
    const half = Math.ceil(arr.length / 2); 
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    if(half > 1) {
        position -= half - 1;
    } else {
        position -= 1;
    }
    document.write("<br>left split: " + left);
    document.write("<br>right split: " + right);
    document.write("<br>Split at position " + position + "<br>");
    return merge2(mergeSort2(left), mergeSort2(right));
  }