setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let date = time.getDate();
  let month = time.getMonth();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let meridian = "AM";
  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sept";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    default:
      month = "Dec";
  }
  meridian = hour < 12 ? meridian : "PM";
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  hour = hour < 13 ? hour : hour - 12;
  hour = hour < 10 ? "0" + hour : hour;

  document.getElementById("date").innerHTML = month + " " + date;
  document.getElementById("time").innerHTML =
    hour + " : " + minutes + " : " + seconds;
  // document.getElementById("hours").innerHTML = hour;
  // document.getElementById("minutes").innerHTML = minutes;
  // document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("meridian").innerHTML = meridian;
}
showTime();
