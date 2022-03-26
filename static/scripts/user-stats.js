correctAnswers = [];
incorrectAnswers = [];


function addCorrect(level){
    correctAnswers[level] ++;
    console.log (correctAnswers[level]);
}

function addIncorrect(level){
    incorrectAnswers[level] ++;
    console.log (incorrectAnswers[level]);
}

function printAnswerStats(){
    completedLevels = correctAnswers.length;
    for (i=0; i<=completedLevels; i++){
        console.log("level" + i + "corrects:" + correctAnswers[i]);
        console.log("level" + i + "incorrects: " + incorrectAnswers[i]);
    }
}