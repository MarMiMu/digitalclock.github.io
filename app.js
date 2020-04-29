var hours;
var minutes;
var seconds;
function clock(){
	var fullDate = new Date();
	hours = fullDate.getHours(); 
	minutes = fullDate.getMinutes(); 
	seconds = fullDate.getSeconds(); 
	if (hours < 10){
		hours = "0"+hours;
	}
	if (minutes < 10){
		minutes = "0" + minutes;
	}
	if (seconds < 10){
		seconds = "0" + seconds;
	}
	document.getElementById('hours').innerHTML = hours+":";
	document.getElementById('minutes').innerHTML = minutes+":";
	document.getElementById('seconds').innerHTML = seconds;
}
setInterval(clock,100);
var fullDate = new Date();
hours = fullDate.getHours(); 
console.log(hours);
if (hours > 12){
	document.body.style.backgroundImage = "url('backgrounds/night.png')";
}
if (hours < 12){
	document.body.style.backgroundImage = "url('backgrounds/day.png')";
}

