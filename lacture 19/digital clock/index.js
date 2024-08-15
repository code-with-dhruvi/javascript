setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate(); 
    const days=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
    const dayname=days[date.getDay()];

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const AmPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    let minutesDisplay = minutes < 10 ? "0" + minutes : minutes;
    let secondsDisplay = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("date").innerHTML = day + " - " + month + " - " + year + " "+","+dayname;
    document.getElementById("time").innerHTML = hours + " : " + minutesDisplay + " : " + secondsDisplay + " " + AmPm;
},1000);