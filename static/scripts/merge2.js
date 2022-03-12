var position = 9;
var side = 0;

let leftSplit = [];
let rightSplit = [];
var split_counter = 0;
let newMerge = [];
var merge_counter = 0;


function merge2(left, right) {
    let sortedArr = []; // the sorted elements will go here
  
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
        //console.log("<br>mergedleft: " + sortedArr);
      } else {
        sortedArr.push(right.shift());
        //console.log("<br>mergedright: " + sortedArr);
      }
    }

    // use spread operator and create a new array, combining the three arrays
    //console.log("<br>merge into: " + [...sortedArr, ...left, ...right]);
    newMerge[merge_counter] = [...sortedArr, ...left, ...right];
    //document.write("<br>merge into: " + newMerge[merge_counter]);
    merge_counter++;

    //tracks where in the array the split happens
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
    const right = arr; // second half of the array
    if(half > 1) {
        position -= half - 1;
    } else {
        position -= 1;
    }

    leftSplit[split_counter] = [...left]; //copies the left half of the current array being split into another array
    rightSplit[split_counter] = [...right]; //copies the right half of the current array being split into another array
    split_counter++
    
    return merge2(mergeSort2(left), mergeSort2(right)); //returns the fully sorted version of the original, full array
  }


//function to return the left side of an array after splitting
 function returnLeftSplit(splitLevel){
   return leftSplit[splitLevel];
 }

 //function to return the right side of an array after splitting
 function returnRightSplit(splitLevel){
  return rightSplit[splitLevel];
}

function returnNewMerge(mergeLevel){
  return newMerge[mergeLevel];
}