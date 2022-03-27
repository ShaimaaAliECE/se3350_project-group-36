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

function saveAnswers(level){
    localStorage.setItem("corrects", correctAnswers[level]);
    localStorage.setItem("incorrects", incorrectAnswers[level]);
}

//function to print the final stats including all levels
function printAnswerStats(){
    correctAnswers = localStorage.getItem("corrects");
    incorrectAnswers = localStorage.getItem("incorrects");
    completedLevels = correctAnswers.length; //checks how many levels have been completed
    for (i=0; i<=completedLevels; i++){
        if (correctAnswers[i] == 0 & incorrectAnswers[i] == 0){ //checks to make sure its not returning empty stats
            return;
        }else
        console.log("level " + (i+1) + " -> corrects:" + correctAnswers[i]); //prints the stats
        console.log("level " + (i+1) + " -> incorrects: " + incorrectAnswers[i]);
    }
}