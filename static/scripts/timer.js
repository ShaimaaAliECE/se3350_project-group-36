start_time = 0;
end_time = 0;
time_spent = 0;
max_idle_time = 300;
totalSeconds = 0;
step_time = [];
level_time = [];
all_levels_step_time = [];


//called when level starts
function levelStart(){
    start_time = Date.now()
    console.log(start_time);
    timeOut();
    timerVar = setInterval(countUp, 1000);
    return start_time;
}

//called when level finishes
function levelEnd(){
    end_time = Date.now();
    console.log(end_time);
    clearInterval(timerVar);
    return end_time;
}

//function to calculate time 
function calcTime(){
    if (start_time == 0 || end_time == 0){
        return null;
    }else 
    time_spent = (end_time - start_time)/1000;
    console.log(time_spent);
    return time_spent;
}

//function to calculate time taken on each step
function timeStep(step){
    if (step == 0){ //initializes for the first step 
        last_step_time = Date.now() 
        step_time[step] = last_step_time - start_time;
        console.log("first" + step_time[step]);
        return step_time[step];
    }
    else //calculations for every step after that
        step_time[step] = Date.now() - last_step_time; //calculates current time based on timestamp from last time a step was completed
        last_step_time = Date.now(); //sets the new timestamp as a step is completed
        console.log(step + "step:"+ step_time[step]);
    return step_time[step];
}

//function to call whenever a level is completed in order to add stats to the overall tracking
function trackFinalStats(level){
    level_time[level] = calcTime(); //total time spent on the level
    console.log("leveltime= " + level_time[level]);
    all_levels_step_time[level] = [...step_time]; //array of time spent on each step of the level
    console.log (all_levels_step_time[level]);
}

//function to show timer on screen
function countUp(){
    ++totalSeconds;
    var hour = Math.floor(totalSeconds/3600);
    var minute = Math.floor((totalSeconds - hour*3600)/60);
    var seconds = totalSeconds - (hour*3600 + minute*60);
    if(hour < 10)
      hour = "0" + hour;
    if(minute < 10)
      minute = "0" + minute;
    if(seconds < 10)
      seconds = "0" + seconds;
    document.getElementById("timer").innerHTML = "Time: " + hour + ":" + minute + ":" + seconds;
}

//function to timeout user after a certain amount of inactivity
function timeOut(){
    let idle_timout;

    //function to reset idle timer
    function resetIdle(){
        if (idle_timout){
            clearTimeout(idle_timout);
        }
        //runs the timout function if the timer is not reset within a certain amount of time
        idle_timout = setTimeout(
            function redirect(){
                alert ("You have been redirected to the home page due to " + max_idle_time + " seconds of inactivity.")
                location.href = '/'
            } 
        ,max_idle_time*1000);
    }
    resetIdle();

    //resets inactivity timer on user input
    ['click', 'touchstart', 'mousemove'].forEach(evt => 
        document.addEventListener(evt, resetIdle, false));
}


//function to print the total stats of all the levels for timing related things
function printTimerStats(){
    completedLevels = all_levels_step_time.length; //checks how many levels were completed
    for (i=0; i < all_levels_step_time.length; i++){ //prints the time spent on each level and each step for every level
        console.log("level " + i + " time: " + level_time[i]);
        console.log("level " + i + " time: " + all_levels_step_time[i]);
    }
}
