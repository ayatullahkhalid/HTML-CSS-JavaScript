function setTime() {
  var date = new Date;
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var session = "AM";
  if (hour>12) {
    hour-=12;
    session = "PM"
  }
  if(hour == 0){
    hour = 12;
  }
  hour = (hour < 10) ? "0" + hour : hour;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;
  document.getElementById("hour").innerText = hour; 
  document.getElementById("min").innerText = min; 
  document.getElementById("sec").innerText = sec; 
  document.getElementById("ampm").innerText = session;
  setTimeout(function(){setTime()},1000);
}
setTime();
