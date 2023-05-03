function updateClock() {
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();

	hours = addLeadingZero(hours);
	minutes = addLeadingZero(minutes);
	seconds = addLeadingZero(seconds);

	var clockStr = hours + ":" + minutes + ":" + seconds;

	document.getElementById("clock").textContent = clockStr;
}

function addLeadingZero(num) {
	if (num < 10) {
		return "0" + num;
	} else {
		return num;
	}
}

setInterval(updateClock, 1000);
