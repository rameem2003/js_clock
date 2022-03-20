function clock(){
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    document.getElementById("time").innerHTML = `${hour} : ${minute} : ${second}`;
    var day = document.getElementById("day");

    if(hour < 12){
        day.innerHTML = "AM";
    }
    
    else if(hour > 12){
        hour = hour - 12;
        day.innerHTML = "PM";
    }

    setInterval(clock, 1000);

}

clock();