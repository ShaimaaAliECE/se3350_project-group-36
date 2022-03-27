checkStep = 0;

splitCorrect = true;
splitArray = [];
splitRemove = [0];
lastSplit = 0;

mergeStep = 0;
mergeCorrect = true;

mistakeCheck = true;
mistakeCount = 0;

levelNum = 0;
levelDone = false;
levelCorrect = true;


function levelSet(level) {
    levelNum = level;
    if(level == 3 || level == 2) { 
        size = 9;
        array = randomArray(10, 20); 
        mergePosition = [0, 0, 3, 0, 5, 5, 8, 5, 0]; 
        sharedFunctions();
    } else if(level == 4) {
        size = 19;
        array = randomArray(20, 50); 
        mergePosition = [0, 0, 3, 0, 5, 5, 8, 5, 0, 10, 10, 13, 10, 15, 15, 18, 15, 10, 0]; 
        sharedFunctions();
    } else if(level == 5) {
        size = 49;
        array = randomArray(50, 100); 
        mergePosition = [0, 0, 3, 0, 5, 5, 8, 5, 0]; 
        sharedFunctions();
    }
}

function sharedFunctions() {
    for(i = 0; i < size; i ++) { 
        splitArray[i] = 0;
    }
    splitCheckArray = [...splitArray];
    mergeArray = [...array];
    mergeCheckArray = [...mergeArray];
    levelStart();
    mergeSort(array);
    for(i = 0; i < allSteps()[0].length - 1; i++) {
        document.getElementById("item" + i).innerHTML = allSteps()[0][i + 1]; 
    }
    if(levelNum == 2) {
        document.getElementById("stepTracker").innerHTML += "Step " + (0 + 1) + ": Split at position " + (allSteps()[0][0]);
    }
}

function buttonPress() {
    if(levelDone == true){
        document.location.href = '/level-select';
    } else {
        if(allSteps()[checkStep][0] > 0) {
            lastSplit = allSteps()[checkStep][0] - 1;
            splitArray[allSteps()[checkStep][0] - 1] = 1;
            splitChecker();
            if(splitCorrect == true) {
                splitRemove.splice(splitRemove.length, 0, lastSplit);
            }
            
        } else { 
            for(i = 0; i < (allSteps()[checkStep].length - 1); i++) { // for the length of numbers to be merged
                mergeArray[i + mergePosition[mergeStep]] = allSteps()[checkStep][i + 1]; // assign the merged numbers to the merge array in the right position
                if(document.getElementById("box" + (i + mergePosition[mergeStep])).children[0].innerHTML == allSteps()[checkStep][i + 1]) { // check if the merged numbers equal the numbers in the boxes
                    mergeCorrect = true;
                } else { // if not, set mergeCorrect to false and exit
                    mergeCorrect = false;
                    break;
                }
            }

            if(mergeCorrect == true) {
                splitArray[splitRemove[splitRemove.length - 1]] = 0;
                splitRemove.splice(splitRemove.length - 1, 1);
                splitChecker();
                if(mistakeCheck == false) {
                    splitRemove.splice(splitRemove.length, 0, lastSplit);
                    mergeCorrect = false;
                    mistakeCount--;
                }
            } 

            if(mergeCorrect == true) { // if after all that, mergeCorrect is true
                mistakeCheck = true;
                mergeStep++; // increase the merge step and check step
            } else {
                mistakeCheck = false;
                mistakeCount++;
            }
        }

        if(mistakeCheck == true) {
            document.getElementById("stepCorrect").innerHTML = "✔️";
            addCorrect(levelNum);
            timeStep(checkStep);
            document.getElementById("correct").play();
            checkStep++;

            if(levelNum == 2) {
                if(checkStep < allSteps().length) {
                    if(allSteps()[checkStep][0] > 0) {
                        document.getElementById("stepTracker").innerHTML = "Step " + (checkStep + 1) + ": Split at position " + (allSteps()[checkStep][0]);
                    } else {
                        document.getElementById("stepTracker").innerHTML = "Step " + (checkStep + 1) + ": Merge the split at position " + (splitRemove[splitRemove.length - 1] + 1) + " and remove the split";        
                    }
                }
            }

            if(checkStep >= allSteps().length) {
                levelDone = true;
                levelCorrect = true;
            }
            reset();
        } else {
            document.getElementById("mistakeCounter").innerHTML = "Mistakes: " + mistakeCount;
            addIncorrect(levelNum);
            document.getElementById("stepCorrect").innerHTML = "❌";
            document.getElementById("incorrect").play();
            if(mistakeCount > 2) {
                levelDone = true;
                levelCorrect = false;
            }
            reset();
        } 
        if(levelDone == true) {
            if(levelCorrect == true) {
                levelEnd();
                trackFinalStats(levelNum);
                document.getElementById("stepTracker").innerHTML = "Level Done! Time Taken: " + calcTime();;
                document.getElementById("checkButton").innerHTML = "Next";
            } else {
                levelEnd();
                trackFinalStats(levelNum);
                document.getElementById("stepTracker").innerHTML = "Level Failed! 5 Mistakes Made...";
                document.getElementById("checkButton").innerHTML = "Next";
            }
        }
    }
}

function splitChecker() {
    for(i = 0; i < size; i++) {
        if(document.getElementById("splitArea" + (i + 1)).childElementCount > 0) {
            splitCheckArray[i] = 1;
        } else {
            splitCheckArray[i] = 0;
        }
        if(splitCheckArray[i] != splitArray[i]) {
            splitCorrect = false;
            break;
        } else {
            splitCorrect = true;
        }
    }
    if(splitCorrect == true) {
        mistakeCheck = true;
    } else {
        mistakeCheck = false;
        mistakeCount++;
    }
}