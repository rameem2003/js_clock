function clock(){
    var date = new Date();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var timeFormate = document.getElementById("timeFormate");
    var root = document.getElementById("root");


    // if block for background change according to time
    if(hour > 6 && hour < 12){
        root.style.backgroundImage = "url('./img/mourning.jpg')";
    }
    else if(hour >= 12 && hour <= 16){
        root.style.backgroundImage = "url('./img/noon.jpg')";
    }
    else if(hour > 19){
        root.style.backgroundImage = "url('./img/night.png')";
    }


    // if block for when the time is 12 am & 12pm
    
    if(hour == 0){
        hour = 12;
    }
    if(hour < 12){
        timeFormate.innerHTML = "AM";
    }
    if(hour > 12){
        hour = hour - 12;
        timeFormate.innerHTML = "PM";
    }


    // if block for when the hour, minute & second value is less than 10


    if(hour < 10){
        hour = '0' + hour;
    }

    if(minute < 10){
        minute = '0' + minute;
    }

    if(second < 10){
        second = '0' + second;
    }


    document.getElementById("time").innerHTML = `${hour} : ${minute} : ${second}`;

    setInterval(clock, 1000);

}

clock();