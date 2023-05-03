var screen = document.getElementById("result");

function insert(num) {
	screen.value += num;
}

function clearScreen() {
	screen.value = "";
}

function backspace() {
	var number = screen.value;
	var len = number.length - 1;
	var newNumber = number.substring(0,len);
	screen.value = newNumber;
}

function calculate() {
	var result = eval(screen.value);
	screen.value = result;
}
