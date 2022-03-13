start_time = 0;
end_time = 0;
time_spent = 0;


function levelStart(){
    start_time = Date.now()
    console.log(start_time);
    return start_time;
}

function levelEnd(){
    end_time = Date.now();
    console.log(end_time);
    return end_time;
}

function calcTime(){
    if (start_time == 0 || end_time == 0){
        return null;
    }else 
    time_spent = (end_time - start_time)/1000;
    console.log(time_spent);
    return time_spent;
}