setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let meridian = "AM";
  meridian = hour < 13 ? meridian : "PM";
  hour = hour < 13 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hour = hour < 13 ? hour : hour - 12;
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("meridian").innerHTML = meridian;
}
showTime();
