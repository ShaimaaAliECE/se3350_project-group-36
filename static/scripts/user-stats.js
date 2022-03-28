correctAnswers = [];
incorrectAnswers = [];

for (i=0; i<10; i++){
    correctAnswers[i] = 0;
    incorrectAnswers[i] = 0;
}

//function to call for every time a correct answer is checked. Specify which level the user is currently on in the paremeter
function addCorrect(level){
    correctAnswers[level] ++;
    console.log (correctAnswers[level]);
}
//function for incorrect answers
function addIncorrect(level){
    incorrectAnswers[level] ++;
    console.log (incorrectAnswers[level]);
}

function saveAnswers(){
    localStorage.saveCorrects = JSON.stringify(correctAnswers);
    localStorage.saveIncorrects = JSON.stringify(incorrectAnswers);
}

//function to print the final stats including all levels
function printAnswerStats(){
    correctAnswers = JSON.parse(localStorage.saveCorrects);
    incorrectAnswers = JSON.parse(localStorage.saveIncorrects);

    for (i=0; i < 5; i++){
        console.log("level " + (i+1) + " -> corrects:" + correctAnswers[i]); //prints the stats
        console.log("level " + (i+1) + " -> incorrects: " + incorrectAnswers[i]);
    }
}